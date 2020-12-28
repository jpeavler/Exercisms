//Class BankAccount creates a new bank account with a balance: this._balance that starts at 0
//and a boolean describing whether the account is open: this._is_open that starts as false.
export class BankAccount {
  constructor() {
    this._balance = 0;
    this._is_open = false;
  }
//class method open changes this._is_open from false to true. If this._is_open is already true, it throws an error.
  open() {
    if(this._is_open) {
      throw new ValueError("Account is already open.");
    }
    this._is_open = true;
  }
//class method close changes this._is_open from true to false and resets balance to 0. If this._is_open is already false, it throws an error.
  close() {
    if(!this._is_open) {
      throw new ValueError("Account is already closed.");
    }
    this._is_open = false;
    this._balance = 0;
  }
//class method deposit adds parameter money to this._balance. Will throw an error when the account is closed (this._is_open === false) or
//when the param money is a negative number.
  deposit(money) {
    if(!this._is_open) {
      throw new ValueError("Account is closed.");
    }
    if(money < 0) {
      throw new ValueError("Cannot deposit a negative amount of money.");
    }
    this._balance = this._balance + money;
  }
//class method withdraw removes param money from this._balance. Will throw error when account is closed, money param is negative, or when
//money param is greater than this._balance.
  withdraw(money) {
    if(!this._is_open) {
      throw new ValueError("Account is closed.");
    }
    if(this._balance < money) {
      throw new ValueError("Not enough funds to withdraw requested amount.");
    }
    if(money < 0) {
      throw new ValueError("Cannot withdraw a negative amount of money.");
    }
    this._balance = this._balance - money;
  }
//class get balance method returns the current balance of BankAccount. Will throw an error when the account is closed.
  get balance() {
    if(!this._is_open) {
      throw new ValueError("Account is closed.");
    }
    return this._balance;
  }
}
//Class created for testing purposes by the writer of the exercism.
export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
