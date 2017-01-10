

export const forEach = (xs, acc) => Array.prototype.forEach.call(xs, acc);

export const map = (xs, acc) => Array.prototype.map.call(xs, acc);

export const toArray = (xs) => [].slice.call(xs);

export const getFileExtension = file => 
  (file.name || file).split('.').reverse()[0].toLowerCase();
