import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    formData:null,
}

export const tableSlice = createSlice ({
    name:"table",
    initialState,
    reducers:{
        setformData(state, value){
            state.formData = value.payload
        },

    }
})

export const {setformData} = tableSlice.actions;

export default tableSlice.reducer