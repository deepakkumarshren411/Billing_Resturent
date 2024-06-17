import { createStore, combineReducers } from "redux";

import mainCourseReducer from "../reducers/maincoursereducers/mainCourseReducer"
import dessertReducer from "../reducers/dessertreducer/dessertReducer";
import cartReducer from "../reducers/CartReducer/cartReducer";
import starterReducer from "../reducers/starterReducers/starterReducer"
import totalReducer from "../reducers/totalReducers/totalReducer"


const configureStore = () => {
  const store = createStore(
    combineReducers({
      mainCourse: mainCourseReducer,
      dessert: dessertReducer,
      total: totalReducer,
      starter: starterReducer,
      cart: cartReducer,
    })
  );
  return store;
};
export default configureStore;
