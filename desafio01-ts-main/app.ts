import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { VipAccount } from "./class/VipAccount";

/* PEOPLE ACCOUNT */
const peopleAccount: PeopleAccount = new PeopleAccount(1, "Jess", 10);

/* deposit and withdraw */
peopleAccount.deposit(30);
peopleAccount.withdraw(10);
console.log(peopleAccount);

/* name, account and balance */
console.log(`Nome: ${peopleAccount.getName()}`);
console.log(`Número da conta: ${peopleAccount.getAccountNumber()}`);
console.log(`Saldo: R$ ${peopleAccount.getBalance()}`);

/* ------------------------------------------------------------------------ */

/* COMPANY ACCOUNT */
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);

/* deposit, withdraw get loan */
companyAccount.deposit(10);
companyAccount.withdraw(10);
companyAccount.getLoan(1000);
console.log(companyAccount);

/* name, account and balance */
console.log(`Nome: ${companyAccount.getName()}`);
console.log(`Número da conta: ${companyAccount.getAccountNumber()}`);
console.log(`Saldo: R$ ${companyAccount.getBalance()}`);

/* ------------------------------------------------------------------------ */

/* VIP ACCOUNT */
const vipAccount: VipAccount = new VipAccount("Jess-VIP", 100);

/* deposit and withdraw  */
vipAccount.deposit(12);
vipAccount.withdraw(10);
console.log(vipAccount);

/* name, account and balance */
console.log(`Nome: ${vipAccount.getName()}`);
console.log(`Número da conta: ${vipAccount.getAccountNumber()}`);
console.log(`Saldo: R$ ${vipAccount.getBalance()}`);
