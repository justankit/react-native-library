import { createStore, applyMiddleware } from "redux";

import rootReducer from "./services/reducers";

// mount it on the Store
const store = createStore(rootReducer);

//Run the saga
export default store;
