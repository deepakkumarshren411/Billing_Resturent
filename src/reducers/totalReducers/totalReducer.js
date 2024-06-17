// reducers/totalReducer.js
const totalReducer = (state = 0, action) => {
  switch (action.type) {
    case "SUM":
      return state + parseInt(action.payload, 10);
    default:
      return state;
  }
};

export default totalReducer;
