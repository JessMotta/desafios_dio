import { User, UserService } from "./UserService";

describe("UserService", () => {
	let mockDb: User[] = [];
	let userService = new UserService(mockDb);

	beforeEach(() => {
		mockDb = [{ name: "Joana", email: "joana@dio.com" }];
		userService = new UserService(mockDb);
	});

	it("Deve adicionar um novo usuário", () => {
		userService.createUser("nath", "nath@test.com");
		expect(userService.db).toHaveLength(2);
		expect(userService.db).toContainEqual({
			name: "nath",
			email: "nath@test.com",
		});
	});

	it("Deve listar todos os usuários", () => {
		const result = userService.getAllUsers();
		expect(result).toEqual(mockDb);
	});

	it("Deve deletar um usuário do banco de dados", () => {
		userService.deleteUser("Joana", "joana@dio.com");
		expect(userService.db).toHaveLength(0);
	});
});
