import sortFn from 'sort-fn';

const sendReceipt = (items) => {
  items = sortOutput(items, 'space', 'itemName asc');
  items = sortOutput(items, 'comma', 'isImported desc,taxablePrice asc');
  items = sortOutput(items, 'pipe', 'taxablePrice asc,itemName asc');
  printReciept(items);
};

function printReciept(items) {
  let reciept = '';
  console.log('Output 1 :');
  let output1 = getOutput(items, 'space');
  console.log('Output 2 :');
  let output2 = getOutput(items, 'pipe');
  console.log('Output 3 :');
  let output3 = getOutput(items, 'comma');
  reciept = output1 + output2 + output3;
}

function getOutput(items, type, order){
  for (let i = 0; i < items.itemsGroup.length; i++){
    if (items.itemsGroup[i].type == type){
    for (let j = 0; j < items.itemsGroup[i].items.length; j++){
      if (items.itemsGroup[i].items[j].isImported.includes('imported') || items.itemsGroup[i].items[j].isImported.includes('Imported')) {
console.log(items.itemsGroup[i].items[j].quantity + ' imported ' + items.itemsGroup[i].items[j].itemName + ':' + items.itemsGroup[i].items[j].taxablePrice);
} else {
console.log(items.itemsGroup[i].items[j].quantity + ' ' + items.itemsGroup[i].items[j].itemName + ':' + items.itemsGroup[i].items[j].taxablePrice);
}
    }
    console.log('Sales Taxes:' + items.itemsGroup[i].salesTaxes);
    console.log('Total:' + items.itemsGroup[i].total);
    break;
    }
  }
}

function sortOutput(items, type, sortingPattern){
  if(items.itemsGroup.length == 0) throw new Error('List is empty');
  if(type == '') throw new Error('Type is empty');
  if(sortingPattern == '') throw new Error('sorting Pattern is empty');

  for (let i = 0; i < items.itemsGroup.length; i++){
    if (items.itemsGroup[i].type == type){
      items.itemsGroup[i].items.sort(sortFn(sortingPattern));
    }
  }
  return items;
}


export {sendReceipt,sortOutput};
