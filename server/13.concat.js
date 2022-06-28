const elements = [1, 1, 2, 2];
const Otherelements = [3, 3, 4, 4];

const newArray = [...elements];

for (let index = 0; index < Otherelements.length; index++) {
  const element = Otherelements[index];
  newArray.push(element);
}

const rta = elements.concat(Otherelements);
const rta2 = [...elements, ...Otherelements];
const rta3 = [...elements, ..."random"];

console.log("for", newArray);
console.log("concat", rta);
console.log("...", rta2);
console.log("rta3", rta3);

elements.push(...Otherelements);
console.log("elements", elements);
