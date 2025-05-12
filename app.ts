import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(60)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(50)
companyAccount.withdraw(30)
companyAccount.getLoan(80)
console.log(companyAccount)

const specialAccount: SpecialAccount = new SpecialAccount('Especial User', 80)
specialAccount.deposit(200)
console.log(specialAccount)