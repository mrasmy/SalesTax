import {sortOutput} from './send-receipt'

describe.only('Test Send Receipt',()=>{

  it('Test Infratstrcutrue',()=>{
    true.should.be.true();
  });

  it('Test sort output',()=>{
    let spaceItemsBeforeSorting = {"itemsGroup":[{"type":"space","items":[{"itemName":"book","itemPrice":"12.49","isImported":"no","quantity":"1","taxablePrice":12.49},{"itemName":"music CD","itemPrice":"14.99","isImported":"no","quantity":"1","taxablePrice":16.49},{"itemName":"chocolate bar","itemPrice":"0.85","isImported":"no","quantity":"1","taxablePrice":0.85}],"salesTaxes":1.5,"total":29.83},{"type":"comma","items":[{"itemName":"bottle of perfume","itemPrice":" 27.99","isImported":" imported","quantity":"1","taxablePrice":32.19},{"itemName":"bottle of perfume","itemPrice":" 18.99","isImported":"no","quantity":"1","taxablePrice":20.89},{"itemName":"packet of headache pills","itemPrice":" 9.75","isImported":"no","quantity":"1","taxablePrice":9.75},{"itemName":"box of chocolates","itemPrice":" 11.25","isImported":" imported","quantity":"1","taxablePrice":11.8}],"salesTaxes":6.65,"total":74.63},{"type":"pipe","items":[{"itemName":"bottle of perfume ","itemPrice":" 47.50","isImported":"Imported ","quantity":"1","taxablePrice":54.65},{"itemName":"box of chocolates ","itemPrice":" 10.00","isImported":"Imported ","quantity":"1","taxablePrice":10.5}],"salesTaxes":7.65,"total":65.15}]};
    let spaceItemsAfterSorting = {"itemsGroup":[{"type":"space","items":[{"itemName":"book","itemPrice":"12.49","isImported":"no","quantity":"1","taxablePrice":12.49},{"itemName":"chocolate bar","itemPrice":"0.85","isImported":"no","quantity":"1","taxablePrice":0.85},{"itemName":"music CD","itemPrice":"14.99","isImported":"no","quantity":"1","taxablePrice":16.49}],"salesTaxes":1.5,"total":29.83},{"type":"comma","items":[{"itemName":"bottle of perfume","itemPrice":" 27.99","isImported":" imported","quantity":"1","taxablePrice":32.19},{"itemName":"bottle of perfume","itemPrice":" 18.99","isImported":"no","quantity":"1","taxablePrice":20.89},{"itemName":"packet of headache pills","itemPrice":" 9.75","isImported":"no","quantity":"1","taxablePrice":9.75},{"itemName":"box of chocolates","itemPrice":" 11.25","isImported":" imported","quantity":"1","taxablePrice":11.8}],"salesTaxes":6.65,"total":74.63},{"type":"pipe","items":[{"itemName":"bottle of perfume ","itemPrice":" 47.50","isImported":"Imported ","quantity":"1","taxablePrice":54.65},{"itemName":"box of chocolates ","itemPrice":" 10.00","isImported":"Imported ","quantity":"1","taxablePrice":10.5}],"salesTaxes":7.65,"total":65.15}]};
    sortOutput(spaceItemsBeforeSorting,'space', 'itemName asc').should.be.deepEqual(spaceItemsAfterSorting);
  });

  it('Pass Empty items to SortOutput',()=>{
    let spaceItemsBeforeSorting = {"itemsGroup":[]};
    (function(){sortOutput(spaceItemsBeforeSorting,'space', 'itemName asc')}).should.throw('List is empty');
  });

  it('Pass Empty type to SortOutput',()=>{
    let spaceItemsBeforeSorting = {"itemsGroup":[{"type":"space","items":[{"itemName":"book","itemPrice":"12.49","isImported":"no","quantity":"1","taxablePrice":12.49},{"itemName":"music CD","itemPrice":"14.99","isImported":"no","quantity":"1","taxablePrice":16.49},{"itemName":"chocolate bar","itemPrice":"0.85","isImported":"no","quantity":"1","taxablePrice":0.85}],"salesTaxes":1.5,"total":29.83},{"type":"comma","items":[{"itemName":"bottle of perfume","itemPrice":" 27.99","isImported":" imported","quantity":"1","taxablePrice":32.19},{"itemName":"bottle of perfume","itemPrice":" 18.99","isImported":"no","quantity":"1","taxablePrice":20.89},{"itemName":"packet of headache pills","itemPrice":" 9.75","isImported":"no","quantity":"1","taxablePrice":9.75},{"itemName":"box of chocolates","itemPrice":" 11.25","isImported":" imported","quantity":"1","taxablePrice":11.8}],"salesTaxes":6.65,"total":74.63},{"type":"pipe","items":[{"itemName":"bottle of perfume ","itemPrice":" 47.50","isImported":"Imported ","quantity":"1","taxablePrice":54.65},{"itemName":"box of chocolates ","itemPrice":" 10.00","isImported":"Imported ","quantity":"1","taxablePrice":10.5}],"salesTaxes":7.65,"total":65.15}]};
    (function(){sortOutput(spaceItemsBeforeSorting,'', 'itemName asc')}).should.throw('Type is empty');
  });

  it('Pass Empty items to SortOutput',()=>{
    let spaceItemsBeforeSorting = {"itemsGroup":[{"type":"space","items":[{"itemName":"book","itemPrice":"12.49","isImported":"no","quantity":"1","taxablePrice":12.49},{"itemName":"music CD","itemPrice":"14.99","isImported":"no","quantity":"1","taxablePrice":16.49},{"itemName":"chocolate bar","itemPrice":"0.85","isImported":"no","quantity":"1","taxablePrice":0.85}],"salesTaxes":1.5,"total":29.83},{"type":"comma","items":[{"itemName":"bottle of perfume","itemPrice":" 27.99","isImported":" imported","quantity":"1","taxablePrice":32.19},{"itemName":"bottle of perfume","itemPrice":" 18.99","isImported":"no","quantity":"1","taxablePrice":20.89},{"itemName":"packet of headache pills","itemPrice":" 9.75","isImported":"no","quantity":"1","taxablePrice":9.75},{"itemName":"box of chocolates","itemPrice":" 11.25","isImported":" imported","quantity":"1","taxablePrice":11.8}],"salesTaxes":6.65,"total":74.63},{"type":"pipe","items":[{"itemName":"bottle of perfume ","itemPrice":" 47.50","isImported":"Imported ","quantity":"1","taxablePrice":54.65},{"itemName":"box of chocolates ","itemPrice":" 10.00","isImported":"Imported ","quantity":"1","taxablePrice":10.5}],"salesTaxes":7.65,"total":65.15}]};
    (function(){sortOutput(spaceItemsBeforeSorting,'space', '')}).should.throw('sorting Pattern is empty');
  });

});