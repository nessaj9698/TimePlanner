import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";


const store = configureStore({
    reducer: {
        rootReducer:rootReducer
    }
})



export default store;