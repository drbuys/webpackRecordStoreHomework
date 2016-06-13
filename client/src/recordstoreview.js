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

    // this.displayTotalTypeCash = function(type) {
    // var total = document.getElementById(type + '-total');
    // total.innerText = "Total Business Cash = £" + this.store.totalCash(type);
    // };
    //
    // this.displayAllAccounts = function(type) {
    //     var accountList = document.getElementById('accounts');
    //     this.clearElement(accountList);
    //     for(account of this.store.accounts){
    //         var accountListItem = document.createElement('li');
    //         accountListItem.innerText = account.owner + ": £" + account.amount;
    //         accountList.appendChild(accountListItem);
    //     }
    // };
    //
    // this.displayTypeAccounts = function(type) {
    //     var accountList = document.getElementById(type + '-accounts');
    //     this.clearElement(accountList);
    //     for(account of this.store.filteredAccounts(type)){
    //         var listItem = document.createElement('li');
    //         listItem.innerText = account.owner + ": £" + account.amount;
    //         accountList.appendChild(listItem);
    //     }
    // };

    // this.clearElement = function(element) {
    //     while(element.firstChild) {
    //         element.removeChild(element.firstChild);
    //     }
    // };

    this.render = function() {
        this.displayStoreName();
        this.displayStoreCity();
        // this.displayTotalTypeCash('personal');
        // this.displayTotalTypeCash('business');
        // this.displayAllAccounts();
        // this.displayTypeAccounts('personal');
        // this.displayTypeAccounts('business');
    };

};

module.exports = RecordStoreView;
