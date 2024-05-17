function makeBank() {
  function makeAccount(number) {
    let balance = 0;
    let transactions = [];

    return {
      number() {
        return number;
      },
      balance() {
        return balance;
      },
      transactions() {
        return transactions;
      },
      deposit(amount) {
        balance += amount;
        transactions.push({ type: 'deposit', amount: amount });
        return(amount);
      },
      withdraw(amount) {
        if (amount > balance) {
          amount = balance;
        }
    
        balance -= amount;
        transactions.push({ type: 'withdrawal', amount: amount});
        return amount;
      }
    };
  }

  let accounts = [];

  return {
    openAccount() {
      let number = accounts.length + 101;
      let newAccount = makeAccount(number);
      accounts.push(newAccount);
      return newAccount;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    }
  }
}

let bank = makeBank();
let source = bank.openAccount();
console.log(source.deposit(10));
// 10
let destination = bank.openAccount();
console.log(bank.transfer(source, destination, 7));
// 7
console.log(source.balance);
// 3
console.log(destination.balance);
// 7