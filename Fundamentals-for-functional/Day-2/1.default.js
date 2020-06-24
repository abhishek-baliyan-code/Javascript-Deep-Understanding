const _ = {};
/* ==========================================================================
  _.defaults: Add properties to object from sources if object doesn't have them yet,
  then return the object.

  Definition: _.defaults(object, source)

  Example:

  console.log(_.default({a: 1, b: 2}, {b: 3, c: 4}))
  // => { a: 1, b: 2, c: 4 }

  Instructions: Implement defaults so that you can give default values to the
  weapons object for the weapons you have already disovered are NOT involved
  in the murder

========================================================================== */

_.defaults = function (object, source) {
    Object.keys(source).forEach((souKey) => {
        if (object[souKey] === undefined) {
            object[souKey] = source[souKey];
        }
    });
    return object;
};

const discoveredWeapons = {
    Revolver: true,
    // add in the weapons you have discovered so far to this object
};

// Our newest clues!
const newlyDiscoveredWeapons = {
    "Lead Pipe": true,
    Rope: true,
    Wrench: true,
    Revolver: false,
};

const weaponsTracked = _.defaults(discoveredWeapons, newlyDiscoveredWeapons);

// The objects (first argument) should keep their properties.
console.log(
    "1. Objects should keep their properties.",
    weaponsTracked.Revolver === true
);

// The objects (first argument) should get new properties from the source (second argument).
console.log(
    "2. Objects should get new properties from the source.",
    weaponsTracked.Rope === true
);
