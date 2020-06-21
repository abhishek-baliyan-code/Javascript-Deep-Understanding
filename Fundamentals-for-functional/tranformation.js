/*

const suspectNames = [
    "Miss Scarlet",
    "Col. Mustard",
    "Mrs. White",
    "Mr. Green",
    "Mrs. Peacock",
    "Prof. Plum",
];

function createSuspect(name) {
    return {
        name: name,
        color: name.split(" ")[1],
        speak: function () {
            console.log(`my name is ${name}`);
        },
    };
}

// or

function createSuspect(name) {
    const color = name.split(" ")[1];
    return {
        name,
        color,
        speak() {
            console.log(`my name is ${name}`);
        },
    };
}

// or

function createSuspect(name) {
    const color = name.split(" ")[1];
    const speak = () => {
        console.log(`my name is ${name}`);
    };

    return { name, color, speak };
}

*/

const speak = (name) => {
    console.log(`my name is ${name}`);
};

function createSuspect(name) {
    const color = name.split(" ")[1];
    return { name, color, speak };
}

// Another best practice will be separate the function that is in the function.


const suspectNames = ["Miss Scarlet", "Col. Mustard", "Mrs. White"];
suspectNames.metaData = { provenInnocent: [] };
const suspectListLoop = [];

// function createSuspect(name) {
//     const color = name.split(" ")[1];
//     const speak = () => {
//         console.log(`my name is ${name}`);
//     };

//     return { name, color, speak };
// }

for (let i = 0; i < suspectNames.length; i++) {
    suspectListLoop.push(createSuspect(suspectNames[i]));
}

// The previous for loop is not the best way. Because there may be mistakes while writing on it.

/*

for (const i in suspectNames) {
    suspectListLoop.push(createSuspect(suspectNames[i]));
}

*/

// In "for in" loop. It can also access to suspectNames.metaData

suspectNames.forEach((suspectName) => {
    suspectListLoop.push(createSuspect(suspectName));
});

// Just like for loop. But it won't return anything

const suspectListMap = suspectNames.map((suspectName) => {
    return createSuspect(suspectName);
});

// map is like forEach. But it will return array of same length without filter

console.log(suspectListMap[0].speak(suspectListMap[0].name));