import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import { useForm } from "react-hook-form";

import {
	Container,
	Title,
	Column,
	TitleLogin,
	SubtitleLogin,
	EsqueciText,
	CriarLink,
	Row,
	Wrapper,
	Form,
} from "./styles";
import { useState } from "react";

const Cadastro = () => {
	const navigate = useNavigate();
	const [novoUsuario, setNovoUsuario] = useState({
		name: "",
		email: "",
		senha: "",
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		reValidateMode: "onChange",
		mode: "onChange",
	});

	const onSubmit = async (formData) => {
		try {
			const { data } = await api.get(
				`/users?email=${formData.email}&senha=${formData.senha}`,
			);

			// verifica primeiro se o usuário já está cadastrado
			if (data.length && data[0].id) {
				alert("Usuário cadastrado, faça o login");
				navigate("/login");
				return;
			} else {
				setNovoUsuario({
					name: formData.nome,
					email: formData.email,
					senha: formData.senha,
				});
				criarUsuario();
			}
		} catch (e) {
			alert(`Erro: ${e}`);
		}
	};

	async function criarUsuario() {
		try {
			const response = await api.post(`/users`, novoUsuario);
			alert(`Usuário ${response.data.name} cadastro com sucesso!`);
		} catch {
			alert(
				"Usuário não foi cadastro, verifique novamente os campos preenchidos.",
			);
		}
	}
	console.log("errors", errors);

	return (
		<>
			<Header />
			<Container>
				<Column>
					<Title>
						A plataforma para você aprender com experts, dominar as
						principais tecnologias e entrar mais rápido nas empresas
						mais desejadas.
					</Title>
				</Column>
				<Column>
					<Wrapper>
						<TitleLogin>Faça seu cadastro</TitleLogin>
						<SubtitleLogin>
							Cadastre-se e make the change._
						</SubtitleLogin>
						<Form onSubmit={handleSubmit(onSubmit)}>
							<Input
								placeholder="Nome"
								leftIcon={<MdPerson />}
								name="nome"
								control={control}
							/>
							{errors.nome && <span>Nome é obrigatório</span>}
							<Input
								placeholder="E-mail"
								leftIcon={<MdEmail />}
								name="email"
								control={control}
							/>
							{errors.email && <span>E-mail é obrigatório</span>}
							<Input
								type="password"
								placeholder="Senha"
								leftIcon={<MdLock />}
								name="senha"
								control={control}
							/>
							{errors.senha && <span>Senha é obrigatório</span>}
							<Button
								title="Cadastrar"
								variant="secondary"
								type="submit"
							/>
						</Form>
						<Row>
							<EsqueciText>Esqueci minha senha</EsqueciText>
							<CriarLink href={"/login"}>Login</CriarLink>
						</Row>
					</Wrapper>
				</Column>
			</Container>
		</>
	);
};

export { Cadastro };
