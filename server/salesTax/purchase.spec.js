import {replace, when, verify, reset, td} from '../../test-helper.js';

describe.only('Test purchasing', ()=> {

  it('Test Send Receipt', ()=>{
    const readInput = replace('./read-input').readInput;
    const formatInput = replace('./format-input').formatInput;
    const calculatePrice = replace('./calculate-price').calculatePrice;
    const sendReceipt = replace('./send-receipt').sendReceipt;

    const filenames = 'filenames';
    const items = 'items';
    const formattedInput = 'formattedInput';
    const price = 'price';

    when(readInput(filenames)).thenCallback(items);
    when(formatInput(items)).thenReturn(formattedInput);
    when(calculatePrice(formattedInput)).thenReturn(price);

    let purchase = require('./purchase').purchase;
    purchase(filenames);
    verify(sendReceipt(formattedInput));
  });

  afterEach(() => {
    reset();
  });

});

