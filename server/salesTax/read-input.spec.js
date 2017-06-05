import {readInput, getItems} from './read-input';
describe.only('Test Read Input', ()=>{
  it('Test the infrastructure', ()=>{
    true.should.be.true();
  });

  it.only('Read file content', (done) => {
    const callback = (data) => {
      var datatype = typeof data;
      datatype.should.be.equal('string');
      done();
    };
    getItems('server/salesTax/input/space.txt', callback);
  });

  it.only('Wrong path file', (done) => {
    const callback = (errormsg) => {
      errormsg.should.be.equal('problem reading file');
      done();
    };
    getItems('server/sasdsdlesTax/space.txts', callback);
   });

  it.only('Test Get all Content', (done) => {
    const callback = (items) =>{
      items.items.length.should.be.equal(2);
      done();
    };
    readInput(['server/salesTax/input/space.txt', 'server/salesTax/input/comma.txt'], callback);
  });

  it.only('FileNames is Empty', ()=>{
    (function() { readInput([], null); }).should.throw('No Files');
    });


});
