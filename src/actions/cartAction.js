export const startAddCart = (name, price) => {
  console.log(name, price);
  return { type: "ADD", payload: { name, price } };
};
