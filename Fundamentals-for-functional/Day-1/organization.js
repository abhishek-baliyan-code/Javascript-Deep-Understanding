/*
    INPUT                                       

const suspectNames = [
  "Mr. Green",
  "Mrs. Peacock",
  "Prof. Plum",
  "Mrs. White",
  "Miss Scarlet",
  "Col. Mustard"
];

const weapons = [
  "Revolver",
  "Knife",
  "Lead Pipe",
  "Candlestick",
  "Rope",
  "Wrench"
];

const rooms = [
  "Billiard Room",
  "Kitchen",
  "Library",
  "Conservatory",
  "Hall",
  "Dining Room"
];

    OUTPUT

[
  {
    "Mr. Green": [0, 0, 0, 0],
    "Mrs. Peacock": [0, 0, 0, 0],
    "Prof. Plum": [0, 0, 0, 0],
    "Mrs. White": [0, 0, 0, 0],
    "Miss Scarlet": [0, 0, 0, 0],
    "Col. Mustard": [0, 0, 0, 0]
  },
  {
    "Revolver": [0, 0, 0, 0],
    "Knife": [0, 0, 0, 0],
    "Lead Pipe": [0, 0, 0, 0],
    "Candlestick": [0, 0, 0, 0],
    "Rope": [0, 0, 0, 0],
    "Wrench": [0, 0, 0, 0]
  },
  {
    "Billiard Room": [0, 0, 0, 0],
    "Kitchen": [0, 0, 0, 0],
    "Library": [0, 0, 0, 0],
    "Conservatory": [0, 0, 0, 0],
    "Hall": [0, 0, 0, 0],
    "Dining Room": [0, 0, 0, 0]
  }
];





const suspectNames = [
  "Mr. Green"
];



 {
  "Mr. Green": [0, 0, 0, 0]
}

*/

/*
const suspectNames = ["Mr. Green"];

function createEmptyArray(length, value) {
    return Array(length).fill(value);
}

const output = {};

suspectNames.forEach((element) => {
    output[element] = createEmptyArray(4, 0);
});

console.log(output);
*/

const suspectNames = [
    "Mr. Green",
    "Mrs. Peacock",
    "Prof. Plum",
    "Mrs. White",
    "Miss Scarlet",
    "Col. Mustard",
];

const weapons = [
    "Revolver",
    "Knife",
    "Lead Pipe",
    "Candlestick",
    "Rope",
    "Wrench",
];

const rooms = [
    "Billiard Room",
    "Kitchen",
    "Library",
    "Conservatory",
    "Hall",
    "Dining Room",
];

const output = {};

function createEmptyArray(length, value) {
    return Array(length).fill(value);
}

/*
const gameData = {
    suspectNames: suspectNames,
    weapons: weapons,
    rooms: rooms
};
*/
// es6 way of doing above.

const gameData = {
    suspectNames,
    weapons,
    rooms,
};

/*
for (const section in gameData) {
    output[section] = {};
}
*/

// Better way

// Object.keys(gameData);
// [ 'suspectNames', 'weapons', 'rooms' ]

Object.keys(gameData).forEach((section) => {
    output[section] = {}
    gameData[section].forEach(element => {
        output[section][element] = createEmptyArray(4, 0);
    })
});

console.log(output);

// function organization(collection) {
//     let obj = {};

//     collection.forEach((element) => {
//         obj[element] = createEmptyArray(4, 0);
//     });

//     arr.push(obj);
// }

// organization(suspectNames);
// organization(weapons)
// organization(rooms);

// console.log(arr);
