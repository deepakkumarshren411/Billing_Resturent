const intialValue = [];

const cartReducer = (state = intialValue, action) => {
  switch (action.type) {
    case "ADD": {
      console.log(state);
      return state.concat(action.payload);
    }
    default: {
      return state;
    }
  }
};
export default cartReducer;
