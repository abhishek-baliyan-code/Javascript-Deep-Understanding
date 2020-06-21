const _ = {};

/* ==========================================================================
  _.head:
  Gets the first element of array.

  Definition: _.head(array);

  Example Usage:

  const suspects = ["Colonel Mustard", "Prof Plum"];

  console.log(_.head(suspects));
  // => "Colonel Mustard"

  ====================================================================== */

_.head = function (array) {
    // TODO: Write the solution here
    const result = array == null ? undefined : array[0];
    return result === undefined ? undefined : result;
};

// TEST CASES
const weapons = [
    "Revolver",
    "Knife",
    "Lead Pipe",
    "Candlestick",
    "Rope",
    "Wrench",
];

// We should get the first element of the weapons array.
console.log(
    "1. // We should get the first element of the array.",
    _.head(weapons) === "Revolver"
);
