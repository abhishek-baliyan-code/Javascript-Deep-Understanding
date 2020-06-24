const _ = {};

_.partition = (list, predicate) => { 
  const result = [[],[]];

  list.forEach((item, index, list) => {
    if(predicate(item)) {
      result[0].push(item);
    } else {
      result[1].push(item); 
    }
  });

  return result;
};

_.partition([1, 2, 3, 4], n => n % 2);

// → [[1, 3], [2, 4]]
