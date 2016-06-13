// var _ = require("lodash");

var RecordStoreView = function(store) {

    this.store = store;

    this.displayStoreName = function() {
    var storename = document.getElementById('storename');
    storename.innerText = "Store Name: " + this.store.name;
    console.log(this.store.name);
    };

    this.displayStoreCity = function() {
    var storecity = document.getElementById('storecity');
    storecity.innerText = "Store City: " + this.store.city;
    console.log(this.store.city);
    };

    this.displayStoreBalance = function() {
    var storebalance = document.getElementById('storebalance');
    storebalance.innerText = "Store Balance: £" + this.store.balance;
    console.log(this.store.balance);
    };

    this.displayAllRecords = function() {
        var recordList = document.getElementById('inventory');
        this.clearElement(recordList);
        for(record of this.store.records){
            var recordListItem = document.createElement('li');
            recordListItem.innerText = "Artist: " + record.artist + ", Title: " + record.title + ", Price: £" + record.price;
            recordList.appendChild(recordListItem);
        }
    };

    // this.displayTypeAccounts = function(type) {
    //     var accountList = document.getElementById(type + '-accounts');
    //     this.clearElement(accountList);
    //     for(account of this.store.filteredAccounts(type)){
    //         var listItem = document.createElement('li');
    //         listItem.innerText = account.owner + ": £" + account.amount;
    //         accountList.appendChild(listItem);
    //     }
    // };

    this.clearElement = function(element) {
        while(element.firstChild) {
            element.removeChild(element.firstChild);
        }
    };

    this.render = function() {
        this.displayStoreName();
        this.displayStoreCity();
        this.displayStoreBalance();
        this.displayAllRecords();
        // this.displayTotalTypeCash('personal');
        // this.displayTotalTypeCash('business');
        // this.displayAllAccounts();
        // this.displayTypeAccounts('personal');
        // this.displayTypeAccounts('business');
    };

};

module.exports = RecordStoreView;
