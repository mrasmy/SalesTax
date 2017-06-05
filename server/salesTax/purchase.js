import {readInput} from './read-input';
import {formatInput} from './format-input';
import {calculatePrice} from './calculate-price';
import {sendReceipt} from './send-receipt';

const purchase = (filenames) => {
  readInput(filenames,function(items) {
    let formattedInput = formatInput(items);
    let price = calculatePrice(formattedInput);
    sendReceipt(formattedInput);
  });
};

purchase(['server/salesTax/input/space.txt', 'server/salesTax/input/pipe.txt','server/salesTax/input/comma.txt']);
export {purchase};

