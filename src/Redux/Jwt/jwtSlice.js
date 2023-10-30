import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    jwt : ''
}

export const jwtSlice =  createSlice({
    name : 'jwt',
    initialState,
    reducers:{
        addJwt :(state,{payload})=>{
            state.jwt = payload
        },
        removeJwt: (state)=>{
            state.jwt=""
        }
    }

})
export const {addJwt,removeJwt} = jwtSlice.actions
export default jwtSlice.reducer


