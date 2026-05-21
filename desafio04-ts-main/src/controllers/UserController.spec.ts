import { UserController } from "./UserController";
import { UserService } from "../services/UserService";
import { Request } from "express";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

describe("UserController", () => {
	const mockUserService: Partial<UserService> = {
		createUser: jest.fn(),
		deleteUser: jest.fn(),
	};

	const userController = new UserController(mockUserService as UserService);

	let mockRequest: Request;
	let mockResponse: any;

	beforeEach(() => {
		mockRequest = {
			body: {
				name: "Nath",
				email: "nath@test.com",
			},
		} as Request;
		mockResponse = makeMockResponse();
	});

	it("Deve enviar mensagem de erro caso o campo nome esteja vazio", () => {
		mockRequest.body.name = "";
		userController.createUser(mockRequest, mockResponse);
		expect(mockResponse.state.status).toBe(400);
		expect(mockResponse.state.json).toMatchObject({
			message: "Bad request! Name obrigatório",
		});
	});

	it("Deve enviar mensagem de erro caso o campo email esteja vazio", () => {
		mockRequest.body.email = "";
		userController.createUser(mockRequest, mockResponse);
		expect(mockResponse.state.status).toBe(400);
		expect(mockResponse.state.json).toMatchObject({
			message: "Bad request! Email obrigatório",
		});
	});
	it("Deve adicionar um novo usuário", () => {
		userController.createUser(mockRequest, mockResponse);
		expect(mockResponse.state.status).toBe(201);
		expect(mockResponse.state.json).toMatchObject({
			message: "Usuário criado",
		});
	});

	it("Deve deletar usuário do banco de dados", () => {
		userController.deleteUser(mockRequest, mockResponse);
		expect(mockResponse.state.status).toBe(200);
		expect(mockResponse.state.json).toMatchObject({
			message: "Usuário deletado",
		});
	});
});
