var Store = require('./js_record_store/store.js');
var sampleRecords = require('./sample.json');
var Customer = require('./js_record_store/customer.js');
var Record = require('./js_record_store/record.js');
var RecordStoreView = require('./recordstoreview.js');

var main = function() {

    var Records = JSON.parse(localStorage.getItem("StoreRecords")) || sampleRecords;

    console.log(Records);
    // var Accs = localStorage.getItem("BankAccounts");
    // var newAccs = JSON.parse(Accs);
    // var updateAccounts = []
    // if(newAccs) {
    //     updateAccounts = newAccs;
    // } else {
    //     updateAccounts = sampleAccounts;
    // }
    var store = new Store("Zaks Musicarama!", "Edinburgh", Records, 500);

    // for(recordData of Records){
    //     store.addRecord(new Record(recordData));
    // }

    var recordstoreview = new RecordStoreView(store);

    // var handleClick = function() {
    //     recordstoreview.store.accountInterest();
    //     recordstoreview.render();
    //     var jRecords = JSON.stringify( recordstoreview.store.accounts );
    //     localStorage.setItem( "StoreRecords", jRecords );
    // };

    // var reset = function() {
    //     localStorage.clear();
    //     recordstoreview.render();
    // }

    // document.getElementById("button").addEventListener("click", handleClick);
    // document.getElementById("reset").addEventListener("click", reset);

    recordstoreview.render();

};

window.onload = main;
