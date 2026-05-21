export interface User {
	name: string;
	email: string;
}

const db = [
	{
		name: "Joana",
		email: "joana@dio.com",
	},
];

export class UserService {
	db: User[];

	constructor(database = db) {
		this.db = database;
	}

	createUser = (name: string, email: string) => {
		const user = {
			name,
			email,
		};

		this.db.push(user);
		console.log("DB atualizado", this.db);
	};

	deleteUser = (name: string, email: string) => {
		const deletedUser = {
			name,
			email,
		};

		this.db = this.db.filter(
			(user) =>
				user.name !== deletedUser.name ||
				user.email !== deletedUser.email,
		);

		console.log("DB atualizado", this.db);
	};

	getAllUsers = () => {
		console.log("Lista de usuários", this.db);
		return this.db;
	};
}
