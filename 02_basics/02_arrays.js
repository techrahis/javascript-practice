const marvelHeros = ["thor", "ironman", "spiderman", "captain america", "hulk"];
const dcHeros = ["superman", "flash", "batman", "aquaman", "cyborg"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros); // [ 'thor', 'ironman', 'spiderman', 'captain america', 'hulk', [ 'superman', 'flash', 'batman', 'aquaman', 'cyborg' ] ]

const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros); // [ 'thor', 'ironman', 'spiderman', 'captain america', 'hulk', 'superman', 'flash', 'batman', 'aquaman', 'cyborg' ]

const newAllHeros = [...marvelHeros, ...dcHeros]; // spread operator
// console.log(newAllHeros); // [ 'thor', 'ironman', 'spiderman', 'captain america', 'hulk', 'superman', 'flash', 'batman', 'aquaman', 'cyborg' ]

const anotherArray = [1, 1, 2, [1, 2, [1, 8, 9, [8, 9, 6]]]];
const realAnotherArray = anotherArray.flat(Infinity);
// console.log(realAnotherArray); // [ 1, 1, 2, 1, 2, 1, 8, 9, 8, 9, 6 ]
// console.log(Array.isArray(realAnotherArray)); // true
// console.log(Array.from("Rajarshi")); // [ 'R', 'a', 'j', 'a', 'r', 's', 'h', 'i' ]
