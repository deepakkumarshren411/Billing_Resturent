// actions/totalAction.js
export const total = (num) => {
  console.log(num);
  return { type: "SUM", payload: num };
};
