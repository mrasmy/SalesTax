import {formatInput,formatGroupItems,item,formatSpaceItem,formatPipeItem,formatCommaItem,splitNameFromQuantity} from './format-input';

describe.only('Test Format Input', () =>{
  let items;
  before(function() {
       //items = {items: ['item1', 'item2', 'item3']};
  });

  it('Test infracstructure', () => {
    true.should.be.true();
  });

  it('Test formatInput',()=>{
    let itemsBeforeFormatting = {"items":["comma:\n1 bottle of perfume, 27.99, imported\n","pipe:\nImported | 1 bottle of perfume | 47.50\n","space:\n1 book 12.49\n"]};
    let commaItemObject = new item('bottle of perfume',' 27.99',' imported','1');
    let pipeItemObject = new item('bottle of perfume ',' 47.50','Imported ','1');
    let spaceItemObject = new item('book','12.49',null,'1');
    let itemsAfterFormatting = {"itemsGroup":[{"items":[commaItemObject],"type":'comma'},{"items":[pipeItemObject],"type":'pipe'},{"items":[spaceItemObject],"type":'space'}]};
    formatInput(itemsBeforeFormatting).should.be.deepEqual(itemsAfterFormatting);
  });

  it('Invalid Input Type',()=>{
    let itemsBeforeFormatting = {"items":["nocomma:\n1 bottle of perfume, 27.99, imported\n","pipe:\nImported | 1 bottle of perfume | 47.50\n","space:\n1 book 12.49\n"]};
    (function(){formatInput(itemsBeforeFormatting)}).should.throw('Invalid Type');
  });

  it('No items passed to formatInput',()=>{
    let itemsBeforeFormatting = {"items":[]};
    (function(){formatInput(itemsBeforeFormatting)}).should.throw('No Group Items');
  });

  it('Test formatGroupItems', () => {
    let spaceItem = new item('book','12.49',null,'1');
    let spaceitems = ['space:','1 book 12.49',''];
    let result ={'type': 'space','items':[spaceItem]};
    formatGroupItems(spaceitems,'space').should.be.deepEqual(result);
  });

  it('Pass Empty list to formatGroupItems', () => {
    (function(){formatGroupItems([],'space');}).should.throw('No Items');
  });

  it('Pass Empty Type to formatGroupItems', () => {
    let spaceItem = new item('book','12.49',null,'1');
    let spaceitems = ['space:','1 book 12.49',''];
    let result ={'type': 'space','items':[spaceItem]};
    (function(){formatGroupItems(spaceitems,'');}).should.throw('Empty Type');
  });

  it('Pass a Type out of scope to formatGroupItems', () => {
    let spaceItem = new item('book','12.49',null,'1');
    let spaceitems = ['space:','1 book 12.49',''];
    let result ={'type': 'space','items':[spaceItem]};
    (function(){formatGroupItems(spaceitems,'spacett');}).should.throw('Type does not exist');
  });

  it('Test formatSpaceItem', () => {
    let spaceItem = '1 book 12.49';
    let spaceItemObject = new item('book','12.49',null,'1');
    formatSpaceItem(spaceItem).should.be.deepEqual(spaceItemObject);
  });

  it('Pass Empty value to formatSpaceItem', () => {
    (function(){formatSpaceItem('')}).should.be.throw('Item is empty');
  });

  it('Test formatCommaItem', () => {
    let commaItem = '1 bottle of perfume,27.99, imported';
    let commaItemObject = new item('bottle of perfume','27.99',' imported','1');
    formatCommaItem(commaItem).should.be.deepEqual(commaItemObject);
  });

  it('Pass Empty value to formatCommaItem', () => {
    (function(){formatCommaItem('')}).should.be.throw('Item is empty');
  });

  it('Test formatPipeItem',() =>{
    let pipeItem = 'Imported | 1 bottle of perfume | 47.50';
    let pipeItemObject = new item('bottle of perfume ',' 47.50','Imported ','1');
    formatPipeItem(pipeItem).should.be.deepEqual(pipeItemObject);
  });

  it('Pass Empty value to formatPipeItem', () => {
    (function(){formatPipeItem('')}).should.be.throw('Item is empty');
  });

  it('Test splitNameFromQuantity',() =>{
    let itemQuantityName = '1 book';
    let result = {'itemName':'book','quantity':'1'};
    splitNameFromQuantity(itemQuantityName).should.be.deepEqual(result);
  });

  it('Pass Empty value to splitNameFromQuantity', () => {
    (function(){formatPipeItem('')}).should.be.throw('Item is empty');
  });

});

