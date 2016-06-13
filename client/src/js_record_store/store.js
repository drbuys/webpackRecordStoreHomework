var _ = require('lodash');

var Store = function( name, city, records, balance ){
    this.name = name;
    this.city = city;
    this.records = records;
    this.balance = balance;
};

Store.prototype = {

    addRecord: function(record) {
        this.records.push(record);
    },

    listInventory: function() {
        for(var record in this.records) {
            console.log(this.records[record]);
        }
    },

    // listInventory: function() {
    //     var dave = this.records;
    //     dave.forEach(function(record) {
    //         console.log(dave.record);
    //     });
    // },

    sellRecord: function(record) {
        var i = this.records.indexOf(record);
            if(i != -1) {
            this.balance += this.records[i].price;
	        this.records.splice(i, 1);
        }
    },

    buyRecord: function(record) {
        this.addRecord(record);
        var i = this.records.indexOf(record);
            if(i != -1) {
            this.balance -= this.records[i].price;
        }
    },

    finances: function() {
        var stock = 0;
        for(var record in this.records) {
            stock += this.records[record].price;
        }
        console.log("The current value of store stock is: £" + stock.toFixed(2));
        console.log("The current store balance is: £" + this.balance.toFixed(2));
    }


};


module.exports = Store;
