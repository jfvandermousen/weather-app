import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from '../../axios'
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchWeather = createAsyncThunk(
    'weather/fetch',
    async (payload,{rejectWithValue,getState,dispatch})=>{
        try{
            const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${apiKey}`
            );
            return data;
        } catch (error){
            if(!error?.response){
                throw error
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);

//pending
//full
//reject
//slice

const weatherSlices = createSlice({
    name:"weather",
    initialState: {data:'Loaded'},
    extraReducers : builder => {
        builder.addCase(fetchWeather.pending,(state,action)=>{
            state.loading = true;
        });
        builder.addCase(fetchWeather.fulfilled,(state,action)=>{
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
        });
        builder.addCase(fetchWeather.rejected,(state,action)=>{
            state.loading = false;
            state.weather = undefined;
            state.error = action?.payload;
        });


    }
})

export default weatherSlices.reducer
