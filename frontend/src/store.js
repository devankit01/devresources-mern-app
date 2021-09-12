import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { resourceReducer,  } from "./reducers/resourceReducers";

const reducer = combineReducers({
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
    resourceList : resourceReducer
})


const userInfoLocalStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
const initialState = {

    // USER is Login or Not
    userLogin : { userInfo : userInfoLocalStorage}

};



const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;