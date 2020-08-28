import { createStore, combineReducers } from "redux";

import mainCourseReducer from "../Reducer/mainCourseReducer";
import starterReducer from "../Reducer/starterReducer";
import dessertReducer from "../Reducer/dessertReducer";

import cartReducer from "../Reducer/cartReducer";
import totolReducer from "../Reducer/totolReducer";
const configureStore = () => {
  const store = createStore(
    combineReducers({
      mainCourse: mainCourseReducer,
      dessert: dessertReducer,
      totol: totolReducer,

      starter: starterReducer,
      cart: cartReducer,
    })
  );
  return store;
};
export default configureStore;
