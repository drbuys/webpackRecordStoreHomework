var Store = require('./js_record_store/store.js');
var sampleRecords = require('./sample.json');
var Customer = require('./js_record_store/customer.js');
var Record = require('./js_record_store/record.js');
var RecordStoreView = require('./recordstoreview.js');

var main = function() {

    var Records = JSON.parse(localStorage.getItem("StoreRecords")) || sampleRecords;

    var store = new Store("Zaks Musicarama!", "Edinburgh", Records, 500);

    // for(recordData of Records){
    //     store.addRecord(new Record(recordData));
    // }

    var recordstoreview = new RecordStoreView(store);

    var handleClick = function(e) {
        var artistInput = document.getElementById('artistinput');
        var titleInput = document.getElementById('titleinput');
        var priceInput = document.getElementById('balanceinput');
        var newRecord = new Record(artistInput.value, titleInput.value, priceInput.value);
        recordstoreview.store.addRecord(newRecord);
        recordstoreview.render();
        var jRecords = JSON.stringify( recordstoreview.store.records );
        localStorage.setItem( "StoreRecords", jRecords );
    };

    var handleSubmit = function( event ) {
    event.preventDefault();
    handleClick();
    };

    document.getElementById("button").addEventListener("click", handleClick);

    recordstoreview.render();

};

window.onload = main;
