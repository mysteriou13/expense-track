import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface LinkUser {
    
    namelink:string
}

const initialState: LinkUser = {
 
    namelink:'',
}


export const sliceUser = createSlice({

    name: 'sliceUser',

    initialState,

    reducers: {
        setNameLink:(state, action:PayloadAction<string>)=>{
            state.namelink = action.payload
        }
    }
})

export const { setNameLink } = sliceUser.actions

export default sliceUser.reducer

