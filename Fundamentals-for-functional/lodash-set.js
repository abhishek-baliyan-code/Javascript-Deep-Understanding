const _ = {};

/* ==========================================================================
    _.set:
    Sets the value at property of object. If the property doesn't exist, it's created.
    This method mutates the original object.

    Example Usage:
    const who = {name: "Colonel Mustard"};

    _.set(who, "name", "Miss Scarlett");

    console.log(who);
    // => {name: "Miss Scarlett"}

  ========================================================================== */

_.set = function(object, path, value) {
  // TODO: Write the solution here
  return object[path] = value;
};

// TEST CASES
const who = { name: "Colonel Mustard" };
_.set(who, "name", "Colonel Ketchup");

// We should be able to set a property to a value.
console.log("1. We should be able to set a property to a value.", who.name === "Colonel Ketchup");
