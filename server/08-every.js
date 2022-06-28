const numbers = [1, 4, 30, 49, 29, 10, 13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    rta = false;
  }
}

console.log("for", rta);
const rta2 = numbers.every((item) => item <= 40);
console.log("rta2", rta2);

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const checkteam = team.map((item) => item.age);

console.log("edades:", checkteam);

const checkteamwithEvery = team.every((checkteam) => checkteam <= 15);
console.log("este equipo son mayores:", checkteamwithEvery);

if (checkteamwithEvery === false) {
  console.log("este equipo no puede participar");
} else {
  console.log("este equipo puede participar");
}

//** desafio */

function solution(numbers) {
  return numbers.every((numbers) => numbers % 2 === 0);
  // Tu código aquí 👈
}

console.log(solution([1, 3, 5, 7, 10, 11]));
console.log(solution([2, 4, 6, 8, 10]));
console.log(solution([1, 3, 5]));
