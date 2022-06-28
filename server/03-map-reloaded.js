const orders = [
  {
    name: "Nicolas",
    total: 1000,
    delived: true,
  },
  {
    name: "zulema",
    total: 120,
    delived: false,
  },

  {
    name: "santiago",
    total: 180,
    delived: true,
  },
];

console.log("original", orders);
const rta = orders.map((item) => item.total);
console.log("rta", rta);

// const rta2 = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });

// console.log("rta2", rta2);

const rta3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});

console.log("rta3", rta3);
