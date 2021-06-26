import "./styles/index.scss";

console.log("Hello World");

const foodItems = {
  a: "Chips",
  b: "Bread",
  c: "Pizza",
};

console.log({ ...foodItems, d: "Burger" });
