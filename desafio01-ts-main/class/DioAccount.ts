export abstract class DioAccount {
	private readonly name: string;
	private readonly accountNumber: number;
	private balance: number = 0;
	private status: boolean = true;

	constructor(name: string, accountNumber: number) {
		this.name = name;
		this.accountNumber = accountNumber;
	}

	getName = (): string => {
		return this.name;
	};

	getAccountNumber = (): number => {
		return this.accountNumber;
	};

	deposit = (value: number): void => {
		if (this.validateStatus()) {
			this.balance = this.balance + value;
		}
	};

	withdraw = (value: number): void => {
		if (this.validateStatus() && this.balance >= value) {
			this.balance = this.balance - value;
		} else {
			throw new Error(
				"Você não tem saldo suficiente para efetuar esse saque",
			);
		}
	};

	setBalance = (value: number) => {
		this.balance = this.balance + value;
		return this.balance;
	};

	getBalance = (): number => {
		if (this.validateStatus()) {
			return this.balance;
		} else {
			throw new Error("Saldo não disponível");
		}
	};

	/* changed from private to protected to use this validation in child class */
	protected validateStatus = (): boolean => {
		if (this.status) {
			return this.status;
		}

		throw new Error("Conta inválida");
	};
}
