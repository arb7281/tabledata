import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    formDataList: [],
}

export const tableSlice = createSlice ({
    name:"table",
    initialState,
    reducers:{
        addFormData(state, action){
            state.formDataList = [...state.formDataList, action.payload];
        },

    }
})

export const {addFormData} = tableSlice.actions;

export default tableSlice.reducer