const number = [1, 7, 3, 11];
let rta = false;
for (let index = 0; index < number.length; index++) {
  const element = number[index];
  if (element % 2 === 0) {
    rta = true;
    break;
  }
}
console.log(rta);

const rta2 = number.some((item) => item % 2 === 0);
console.log("rta2", rta2);

const orders = [
  {
    CustomerName: "Nicolas",
    total: 1000,
    delivered: true,
  },
  {
    CustomerName: "zulema",
    total: 120,
    delivered: true,
  },

  {
    CustomerName: "santiago",
    total: 80,
    delivered: true,
  },

  {
    CustomerName: "Nicolas",
    total: 15200,
    delivered: false,
  },
];

//**some solo imprime valor booleano */
const rta3 = orders.some((item) => item.delivered);
console.log("rta3", rta3);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  Startdate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");

const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newDate.Startdate, end: newDate.endDate }
    );
  });
};

console.log("isOverlap", isOverlap(newAppointment));

//**reto 8 Retornar si al menos alguno de los números es par */

function solution(numbers) {
  return numbers.some((i) => i % 2 === 0); // Tu código aquí 👈
}

console.log(solution([1, 3, 5, 7, 10, 11]));
console.log(solution([1, 3, 5]));
