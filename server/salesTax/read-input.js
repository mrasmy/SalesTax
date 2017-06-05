import fs from 'fs';

const getItems = (filename, callback) => {
  const readFileCallback = (err, data) => {
    if (err) return callback('problem reading file');
    return callback(data.toString());
  };
  fs.readFile(filename, readFileCallback);
};

const readInput = (filenames, callback) => {
  if (filenames.length == 0) throw new Error('No Files');
  let items = {items: []};
  for (let i = 0; i < filenames.length; i++)
      getItems(filenames[i], (item)=>{items.items.push(item);if(items.items.length == filenames.length) return callback(items);});
};

export {readInput,getItems};
