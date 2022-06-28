const pets = ["cat", "dog", "fish", "bat"];

let includeInarray = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "dog") {
    includeInarray = true;
    break;
  }
}

const rta = pets.includes((item) => item === "dog");
console.log("for", includeInarray);
console.log("for", rta);

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

console.log(pets.includes("cat"));
// expected output: true

console.log(pets.includes("at"));
// expected output: false
