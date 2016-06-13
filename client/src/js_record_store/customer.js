var _ = require('lodash');

var Customer = function( name, records, balance ){
    this.name = name;
    this.records = records;
    this.balance = balance;
};

Customer.prototype = {

    buyRecord: function( store, record ) {
        this.records.push(record);
        var i = this.records.indexOf(record);
            if(i != -1) {
            this.balance -= this.records[i].price;
        }
        store.sellRecord(record);
    },

    sellRecord: function( store, record ) {
        var i = this.records.indexOf(record);
            if(i != -1) {
            this.balance += this.records[i].price;
            this.records.splice(i, 1);
        }
        store.buyRecord(record);
    },

};

module.exports = Customer;
