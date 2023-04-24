import {combineReducers} from "@reduxjs/toolkit";
import slice from "./extensesReducer";


export const rootReducer = combineReducers({
    expenses: slice.reducer
})
