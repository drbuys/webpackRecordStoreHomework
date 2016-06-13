var Store = require('../store.js');
var Record = require('../record.js');
var Customer = require('../customer.js');
var assert = require('chai').assert;


describe('Store', function() {

  beforeEach(function(){
      record1 = new Record("The Smashing Pumpkins", "Today", 5.50);
      record2 = new Record("The Smashing Pumpkins", "Mayonaise", 6.50);
      record3 = new Record("The Smashing Pumpkins", "Zero", 5.00);
      record4 = new Record("Andrew Kenny", "Church Mouse in the Church House", 4.50);
      record5 = new Record("Postal Service", "Such Great Heights", 4.80);
      record6 = new Record("Styrofoam", "Misguided", 7.00);
      store1 = new Store("Zaks", "Edinburgh", [], 500);
      store2 = new Store("Daves", "Balingry", [], 200);
      customer1 = new Customer("Batman", [], 20);
  });

  it('should add a record', function(){
    //   console.log(store1);
      store1.addRecord(record1);
      store1.addRecord(record2);
    //   console.log(store1);
      assert.equal(2, store1.records.length);
  });

  it('should list an Inventory of stock for store', function(){
      store1.addRecord(record1);
      store1.addRecord(record2);
      store1.listInventory();
      assert.equal(2, store1.records.length);
  });

  it('should sell a record and change balance appropriatley', function(){
      store1.addRecord(record1);
      store1.addRecord(record2);
      store1.addRecord(record3);
      store1.addRecord(record4);
      store1.addRecord(record5);
      store1.addRecord(record6);
    //   console.log(store1.records);
          store1.sellRecord(record6);
    //   console.log(store1.records);
      assert.equal(507, store1.balance);
      assert.equal(5, store1.records.length);
  });

  it('should report the stores finances', function(){
      store1.addRecord(record1);
      store1.addRecord(record2);
      store1.addRecord(record3);
      store1.addRecord(record4);
      store1.addRecord(record5);
      store1.addRecord(record6);
      store1.finances();
      assert.equal(500, store1.balance);
  });

  it('should buy records (customer)', function(){
      store1.addRecord(record1);
      store1.addRecord(record2);
      store1.addRecord(record3);
      store1.addRecord(record4);
      store1.addRecord(record5);
      store1.addRecord(record6);
      customer1.buyRecord( store1, record6 );
      assert.equal(507, store1.balance);
      assert.equal(record6, customer1.records[0]);
  });

  it('should sell records (customer)', function(){
      store1.addRecord(record1);
      store1.addRecord(record2);
      store1.addRecord(record3);
      store1.addRecord(record4);
      store1.addRecord(record5);
      store1.addRecord(record6);
      customer1.buyRecord( store1, record6 );
      customer1.buyRecord( store1, record5 );
      customer1.sellRecord( store2, record6 );
      assert.equal(1, store2.records.length);
      assert.equal(4, store1.records.length);
      assert.equal(1, customer1.records.length);
  });

});
