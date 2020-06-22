const _ = {};
/* ==========================================================================
  _.map:
  Creates an array of values by running each element in collection thru iteratee. 
  The iteratee is invoked with three arguments: (value, index|key, collection).

  Definition: _.map(collection, iteratee)

  Example Usage:

  console.log(_.map([1, 2, 3], number => number + 1));
  // => [2, 3, 4]

  console.log(_.map({a: 1, b: 2}, number => number + 1));
  // => { a: 2, b: 3 }

========================================================================== */

_.map = function (collection, iteratee) {
    let result;
    if (Array.isArray(collection)) {
        result = [];
        const arrayLength = collection.length;
        for (let i = 0; i < arrayLength; i++) {
            result.push(iteratee(collection[i], i, collection));
        }
    } else {
        result = {};
        for (const key in collection) {
            result[key] = (iteratee(collection[key], key, collection));
        }
    }
    return result;
};

// TEST CASES:

const suspects = [
    "Mr. Green",
    "Mrs. Peacock",
    "Prof. Plum",
    "Mrs. White",
    "Miss Scarlet",
    "Col. Mustard",
];

const result = _.map(suspects, (suspect, index, coll) => {
    return `Was it ${suspect}!?`;
});

console.log(result);

// If the input is an array, we should get an array back
console.log(
    "1. If the input is an array, we should get an array back",
    "suspects:",
    Array.isArray(suspects),
    "result:",
    Array.isArray(result)
);

// Should return an array of strings questioning each suspect in the array
console.log(
    "Should return an array of strings questioning each suspect in the array",
    result[0] === "Was it Mr. Green!?"
);


console.log(_.map([1, 2, 3], number => number + 1));
  // => [2, 3, 4]

  console.log(_.map({a: 1, b: 2}, number => number + 1));
  // => { a: 2, b: 3 }
