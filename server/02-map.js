const letters = ["a", "b", "c", "d"];
const newArray = letters.map((item) => item + "++");
console.log("new array", newArray);

// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//   const element = letters[index];
//   console.log(newArray.push(element + "++"));
// }

console.log("original array", letters);

console.log("new array", newArray);

// //** ##reto1 multiplicar elementos del array por 2 */
// function solution(array) {
//   return (newArray = array.map((item) => item * 2));
// }
// console.log(solution([2, 4, 5, 6]));

// //** ##reto 2 Transforma un Array de objetos a un Array de strings */

// // function solution(array) {
// //   return (newArray = array.map((item) => item.name));
// // }

// // console.log(
// //   solution([
// //     {
// //       name: "Nicolas",
// //       lastName: "Molina",
// //       age: 28,
// //     },
// //     {
// //       name: "Valentina",
// //       lastName: "Molina",
// //       age: 19,
// //     },
// //   ])
// // );

// //** ##reto 3 Calcula y agrega una nueva propiedad en un Array */

// function solution(array) {
//   return array.map((item) => ({
//     ...item,
//     taxes: Math.trunc(item.price * 0.19),
//   }));
// }

// console.log(
//   solution([
//     {
//       name: "Product 1",
//       price: 1000,
//       stock: 10,
//     },
//     {
//       name: "Product 2",
//       price: 2000,
//       stock: 20,
//     },
//   ])
// );

// //** ##reto 4 Retorna solo palabras de 4 letras y más. */

// function solution(array) {
//   return array.filter((word) => word.length >= 4);
// }

// console.log(solution(["amor", "sol", "piedra", "día"]));

// //**##reto 5 Filtra las compras que cumplan con las condiciones. */

// function solution(array) {
//   return array.filter((item) => item?.total >= 100 && item?.delivered);
// }

// console.log(
//   solution([
//     {
//       customerName: "Nicolas",
//       total: 100,
//       delivered: true,
//     },
//     {
//       customerName: "Zulema",
//       total: 120,
//       delivered: false,
//     },
//   ])
// );

// //**reto 6 Busca dentro de un string y descubre si ¿Tiene la clave?*/

// function solution(array) {
//   return array.filter((word) => (word = "ana" ? word : true));
// }

// console.log(solution(["Ana lava la tina", "ana"]));

// console.log(solution(["Santiago", "tiago"]));

// console.log(solution(["Nicolas", "ana"]));

const array = [11, 1, 13, 99, 8];
array.sort((a, b) => a - b);

console.log(array)