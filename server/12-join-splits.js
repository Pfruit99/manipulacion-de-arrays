const elements = ["fire", "water", "air"];

let rtafinal = "";
const separator = "--";

for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtafinal = rtafinal + element + separator;
}

const rta = elements.join("--");

console.log("for", rtafinal);

console.log("join", rta);

const title = "curso de manipulacion de array";

const urlFinal = title.split(" ").join("-").toLowerCase();
console.log(urlFinal);

//**reto 10 Construye una URL con base a un string*/


function solution(title) {
  // Tu código aquí 👈
  return title.split(" ").join("-").toLowerCase();
}

solution("La forma de correr Python");
solution("La API para nunca parar de aprender");
solution("Curso de arrays");

