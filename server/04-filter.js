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

const rta3 = orders.filter((item) => item.delivered && item.total >= 100);
console.log("rta3", rta3);

const search = (query) => {
  return orders.filter((item) => {
    return item.CustomerName.includes(query);
  });
};

console.log(search("Nico"));

const words = ["spray", "limit", "elite", "exuberant"];

const newArray = [];

for (let index = 0; index < words.length; index++) {
  const item = words[index];

  if (item.length >= 6) {
    newArray.push(item);
  }
}

console.log("newArray", newArray);
console.log("original", words);
const rta = words.filter((item) => item.length >= 6);
console.log("rta", rta);
console.log("original", words);
