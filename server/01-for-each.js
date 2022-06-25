// ** iteracion para for y for-each
const letter = ["a", "b", "c"];

//**condicional for */
for (let index = 0; index < letter.length; index++) {
  const element = letter[index];
  console.log("esto fue con for", element);
}

//**condicional forEach */
letter.forEach((item,index) => console.log("esto fue con foreach", item));
