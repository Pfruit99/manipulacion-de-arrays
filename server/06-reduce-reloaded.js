const items = [1, 3, 2, 3];

const rta = items.reduce((obj, items) => {
  if (!obj[items]) {
    obj[items] = 1;
  } else {
    obj[items] = obj[items] + 1;
  }
  return obj;
}, {});

console.log(rta);

const data = [
  {
    name: "nikolai",
    leve: "low",
  },
  {
    name: "Andrea",
    leve: "high",
  },

  {
    name: "zulema",
    leve: "medium",
  },

  {
    name: "cris",
    leve: "high",
  },
  {
    name: "aleja",
    leve: "high",
  },
];

const rta1 = data
  .map((items) => items.leve)
  .reduce((obj, items) => {
    if (!obj[items]) {
      obj[items] = 1;
    } else {
      obj[items] = obj[items] + 1;
    }
    return obj;
  }, {});

console.log(rta1);

//** reto reduce reloaded */
const list = [];

list.forEach((item, index) => {
  list.push(Math.floor(Math.random() * 11));
});

const rta2 = list.reduce(
  (obj, value) => {
    if (value < 5) obj["1-4"] += 1;
    else if (value < 9) obj["5-8"] += 1;
    else obj["9-10"] += 1;

    return obj;
  },
  {
    "1-4": 0,
    "5-8": 0,
    "9-10": 0,
  }
);

console.log(rta2);
