function calculatePrice (formattedItems){
  if(formattedItems.itemsGroup.length == 0) throw new Error('Empty List');
  for (let i = 0; i < formattedItems.itemsGroup.length; i++){
    for (let j = 0; j < formattedItems.itemsGroup[i].items.length; j++){
      formattedItems.itemsGroup[i].items[j].taxablePrice = calculateItemTaxes(formattedItems.itemsGroup[i].items[j]);
      formattedItems.itemsGroup[i].salesTaxes = calculateSlaesTaxes(formattedItems.itemsGroup[i].items);
      formattedItems.itemsGroup[i].total = calculateTotal(formattedItems.itemsGroup[i].items);
     }
   }
   return formattedItems;
}


function calculateSlaesTaxes(items) {
  if(items.length == 0) throw new Error('Empty List');
 let totalWithoutTax = 0;
for (let i = 0; i < items.length; i++) {
totalWithoutTax = totalWithoutTax + parseFloat(items[i].itemPrice);
}
  return roundNumber((calculateTotal(items) - totalWithoutTax), 100);
}

function calculateTotal(items) {
  if(items.length == 0) throw new Error('Empty List');
  let total = 0;
  for (let i = 0; i < items.length; i++) {
total += parseFloat(items[i].taxablePrice);
}

  return total;
}

function calculateItemTaxes(item){
  if(item == null) throw new Error('Empty Item');
  let normalTax = 0, importingTax = 0;
  if (checkIfExempted(item.itemName) == false) {
normalTax = roundNumber(parseFloat(item.itemPrice) * (10 / 100), 20);
}

  if (item.isImported.includes('imported') || item.isImported.includes('Imported')) {
importingTax = roundNumber(parseFloat(item.itemPrice) * (5 / 100), 20);
}

  return roundNumber(normalTax + importingTax + parseFloat(item.itemPrice), 100);
  }

function checkIfExempted(itemName){
  return (itemName.includes('pills') || itemName.includes('book') || itemName.includes('chocolate'));
}

function roundNumber(number, factor){
  	return Math.round( number * factor) / factor;
}


export {calculatePrice, roundNumber, checkIfExempted, calculateItemTaxes, calculateTotal, calculateSlaesTaxes};
