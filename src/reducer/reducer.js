import {combineReducers} from "@reduxjs/toolkit"
import tableReducer from "../slices/tableSlice"

const rootReducer = combineReducers({
    table: tableReducer,
})

export default rootReducer