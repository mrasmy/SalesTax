function formatInput(items){
  let formattedInput = {itemsGroup: []};
  if (items.items.length == 0) throw new Error('No Group Items');

  for (let i = 0; i < items.items.length; i++){
    let list = items.items[i].split('\n');
    if (list[0] == 'space:'){
      formattedInput.itemsGroup.push(formatGroupItems(list, 'space'));
    } else if (list[0] == 'comma:'){
      formattedInput.itemsGroup.push(formatGroupItems(list, 'comma'));
    } else if (list[0] == 'pipe:'){
      formattedInput.itemsGroup.push(formatGroupItems(list, 'pipe'));
    } else {
      throw new Error('Invalid Type');
    }
  }
  return formattedInput;
}


const formatGroupItems = (items, type) => {
  if (items.length == 0) throw new Error('No Items');
  if (type == '') throw new Error('Empty Type');

  let formattedItems = {type: type, items: []};
  items.splice(0, 1);
  items.splice(items.length - 1, items.length);
  for (let i = 0; i < items.length; i++){
    let formattedObject = {};
    if (type == 'space') formattedObject = formatSpaceItem(items[i]);
    else if (type == 'comma') formattedObject = formatCommaItem(items[i]);
    else if (type == 'pipe') formattedObject = formatPipeItem(items[i]);
    else throw new Error('Type does not exist');
    formattedItems.items.push(formattedObject);
  }
  return formattedItems;
};

//Space Item Example : 1 book 12.49
const formatSpaceItem = (spaceItem) => {
  let spacePattern = /^\d\s.+\s\d+\.?\d*$/;
  if (spaceItem == '' || spaceItem == null) throw new Error('Item is empty');
  if (spacePattern.test(spaceItem)== false) throw new Error('Wrong Space Item Format');
  let itemQuantityName = spaceItem.substr(0, spaceItem.lastIndexOf(' '));
  let itemPrice = spaceItem.substr(spaceItem.lastIndexOf(' ') + 1);
  let resultObject = splitNameFromQuantity(itemQuantityName);
  let formattedSpaceItem = new item(resultObject.itemName, itemPrice, null, resultObject.quantity);
  return formattedSpaceItem;
};

//Comma Item Example : 1 bottle of perfume,27.99, imported
const formatCommaItem = (commaItem) =>{
  let commaPattern = /^\d+\s.+,\s?\d+\.?\d*.+$/;
  if (commaItem == '' || commaItem == null) throw new Error('Item is empty');
  if (commaPattern.test(commaItem)== false) throw new Error('Wrong comma Item Format');
  let formattedCommaItemArray = commaItem.split(',');
  let resultObject = splitNameFromQuantity(formattedCommaItemArray[0]);
  let formattedCommaItem = new item(resultObject.itemName, formattedCommaItemArray[1], formattedCommaItemArray[2], resultObject.quantity);
  return formattedCommaItem;
};

//Pipe Item Example : Imported | 1 bottle of perfume | 47.50
const formatPipeItem = (pipeItem) => {
  let pipePattern = /.+\s\|\s\d+\s.+\s\|\s\d+\.?d*/;
  if (pipeItem == '' || pipeItem == null) throw new Error('Item is empty');
  if (pipePattern.test(pipeItem)== false) throw new Error('Wrong Pipe Item Format');
  let formattedPipeItemArray = pipeItem.split('|');
  let resultObject = splitNameFromQuantity(formattedPipeItemArray[1].substr(1));
  let formattedPipeItem = new item(resultObject.itemName, formattedPipeItemArray[2], formattedPipeItemArray[0], resultObject.quantity);
  return formattedPipeItem;
};

function item (itemName, itemPrice, isImported, quantity) {
  this.itemName = itemName;
  this.itemPrice = itemPrice;
  if (isImported == null) this.isImported = 'no';
  else this.isImported = isImported;
  this.quantity = quantity;
}

function splitNameFromQuantity(itemNameQuantity){
  if (itemNameQuantity == '') throw new Error('Item is empty');
  let resultObject = {itemName: '', quantity: ''};
  resultObject.quantity = itemNameQuantity.substr(0, itemNameQuantity.indexOf(' '));
  resultObject.itemName = itemNameQuantity.substr(itemNameQuantity.indexOf(' ') + 1);
  return resultObject;
}

export {formatInput, formatGroupItems, item, formatSpaceItem, formatPipeItem, formatCommaItem, splitNameFromQuantity};
