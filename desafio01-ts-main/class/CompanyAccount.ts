import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber);
	}

	getLoan = (value: number): void => {
		if (this.validateStatus()) {
			this.setBalance(value);
		} else {
			throw new Error(
				"Você não pode pegar um empréstimo. Fale com seu gerente.",
			);
		}
	};
}
