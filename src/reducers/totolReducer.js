const totolReducer = (state = 0, action) => {
  switch (action.type) {
    case "SUM": {
      let totol = parseInt(action.payload);
      let sum = (state += totol);
      return sum;
    }
    default: {
      return state;
    }
  }
};
export default totolReducer;
