let invoices = {
  unpaid: [],

  add: function(name, amount) {
    this.unpaid.push({
      name,
      amount,
    });
  },

  totalDue: function() {
    return this.unpaid.reduce((sum, {amount}) => sum + amount, 0);
  }
}

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

console.log(invoices.totalDue());

invoices.paid = [];
invoices.payInvoice = function(name) {
  let unpaid = [];

  for (let i = 0; i < this.unpaid.length; i++) {
    if (name === this.unpaid[i].name) {
      this.paid.push(this.unpaid[i]);
    } else {
      unpaid.push(this.unpaid[i]);
    }
  }

  this.unpaid = unpaid;
}

invoices.totalPaid = function() {
  return this.paid.reduce((sum, {amount}) => sum + amount, 0);
}

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalPaid());
console.log(invoices.totalDue());