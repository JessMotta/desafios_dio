import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useState } from "react"
import { SubmitButton } from "../SubmitButton/SubmitButton"
import { login } from "../../services/login"

export const Form = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeUsername = (event: any) => {
        setUsername(event.target.value)
    }
    const handleChangePassword = (event: any) => {
        setPassword(event.target.value)
    }

    return (
        <>
            <FormControl isRequired>
                <FormLabel>Usuário:</FormLabel>
                <Input
                    placeholder="Digite seu usuario"
                    type='text'
                    value={username}
                    onChange={handleChangeUsername}
                    marginBottom='24px'
                />
                <FormLabel>Senha:</FormLabel>
                <Input
                    placeholder="Digite sua senha"
                    type='password'
                    value={password}
                    onChange={handleChangePassword}
                />
            </FormControl>

            <SubmitButton textButton='Entrar' loginButton={() => login(username, password)} />
        </>
    )
}

