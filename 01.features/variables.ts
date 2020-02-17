const apples: number = 30;
const speed: string = "fast";
const hasName: boolean = true;

const nothingMuch: null = null;
const nothing: undefined = undefined;

const now: Date = new Date();

// array
const colors: Array<string> = ["red", "green", "blue"];
const colors2: string[] = ["red", "green", "blue"];

// classes
class Car { }
const car: Car = new Car();

// objects
const point: { x: number; y: number; } = {
    x: 10,
    y: 20
};

// functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

logNumber(2);


/**
 * WHEN TO USE ANNOTATIONS
 */

// 1) function that returns the any type
const json = `{ "x": 10, "y": 20 }`;
const coordinater: { x: number, y: number; } = JSON.parse(json);

console.log(coordinater);

// 2) when we declare a variable on one line and initilizate it later
let words: string[] = ['red', 'green', 'blue'];
let foundWord: boolean;


for (let i: number = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

console.log(foundWord);

// 3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}

