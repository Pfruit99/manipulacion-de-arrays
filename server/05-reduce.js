const totals = [1, 3, 5, 7];

let sum = 0;

for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum = sum + element;
}

console.log(sum);

//**envia 2 parametros con reduce, el arrow function y el estado inicial */
const rta = totals.reduce((sum, element) => sum + element, 0);
console.log("rta", rta);

//**reto7 Calcula la suma total de los elementos */
function solution(numbers) {
  const rta1 = numbers;
  return rta1.reduce((suma, element) => suma + element);
}

console.log(solution([1, 1, 1]));
console.log(solution([2, 4, 8]));
