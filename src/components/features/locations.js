import {createSlice} from '@reduxjs/toolkit'

const initialValue = {city:"",temperature:0,humidity:0,wind:0};

export const locationsSlice = createSlice({
    name:"locations",
    initialState: {value : initialValue},
    reducers : {
        display: (state,action) => {
            state.value = action.payload;

        },
        refresh: (state) => {
            state.value = initialValue;
        }
    }
})

export const {display, refresh} = locationsSlice.actions
export default locationsSlice.reducer;