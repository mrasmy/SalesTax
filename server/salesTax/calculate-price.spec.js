import {calculatePrice,roundNumber,checkIfExempted,calculateItemTaxes,calculateTotal,calculateSlaesTaxes} from './calculate-price';

describe.only('Test price Calculation',() =>{
  it('Test Infrastructure',()=>{
    true.should.be.true();
  });

  it('Test Calculate Price',() =>{
    let items={"itemsGroup":[{"type":"space","items":[{"itemName":"book","itemPrice":"12.49","isImported":"no","quantity":"1"},{"itemName":"music CD","itemPrice":"14.99","isImported":"no","quantity":"1"}]}]};
   let result ={"itemsGroup":[{"type":"space","items":[{"itemName":"book","itemPrice":"12.49","isImported":"no","quantity":"1","taxablePrice":12.49},{"itemName":"music CD","itemPrice":"14.99","isImported":"no","quantity":"1","taxablePrice":16.49}],"salesTaxes":1.5,"total":28.979999999999997}]};
    calculatePrice(items).should.be.deepEqual(result);
  });

  it('Pass empty list to Calculate Price',() =>{
    (function(){calculatePrice({"itemsGroup":[]})}).should.throw('Empty List');
  });

  it('Test calculateSlaesTaxes', () => {
    let spaceItems=[{"itemName":"book","itemPrice":"12.49","isImported":"no","quantity":"1","taxablePrice":12.49},{"itemName":"music CD","itemPrice":"14.99","isImported":"no","quantity":"1","taxablePrice":16.49}];
    calculateSlaesTaxes(spaceItems).should.be.equal(1.5);
  });

  it('Pass empty list to calculateSlaesTaxes',() =>{
    (function(){calculateSlaesTaxes([])}).should.throw('Empty List');
  });

  it('Test calculateTotal', ()=>{
    let spaceItems = [{"itemName":"book","itemPrice":"12.49","isImported":"no","quantity":"1","taxablePrice":12.49},{"itemName":"music CD","itemPrice":"14.99","isImported":"no","quantity":"1","taxablePrice":16.49},{"itemName":"chocolate bar","itemPrice":"0.85","isImported":"no","quantity":"1","taxablePrice":0.85}];
    calculateTotal(spaceItems).should.be.equal(29.83);
    });

  it('Pass empty list to calculateTotal',() =>{
    (function(){calculateTotal([])}).should.throw('Empty List');
  });

  it('Test calculateItemTaxes',()=>{
    let item ={"itemName":"bottle of perfume","itemPrice":" 27.99","isImported":" imported","quantity":"1"};
    calculateItemTaxes(item).should.be.equal(32.19);
  });

  it('Pass empty item to calculateTotal',() =>{
    (function(){calculateItemTaxes(null)}).should.throw('Empty Item');
  });

  it('Test checkIfExempted',()=>{
    checkIfExempted('packet of headache pills').should.be.true();
  });

  it('Test roundNumber',()=>{
    roundNumber(0.5625,20).should.be.equal(0.55);
  });



})


/*function calculatePrice (formattedItems){
  function calculateSlaesTaxes(items) {
    function calculateTotal(items) {
      function calculateItemTaxes(item){
        function checkIfExempted(itemName)
        function roundNumber(number)
        function roundNumber2(number)
*/
