export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // setName = (name: string): void => {
  //   this.name
  //   console.log('Nome alterado com sucesso!')
  // }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + value
      console.log('Voce depositou', value)
    }
  }

  withdraw = (value: number): void => {
      if(this.validateStatus() && this.balance > 0){
       this.balance = this.balance - value
        console.log(`Voce sacou: R$ ${value} | Saldo atual é de: R$ ${this.balance}`)
    }
  }

  getBalance = (): void => {
    console.log("Seu saldo é de: ", this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
