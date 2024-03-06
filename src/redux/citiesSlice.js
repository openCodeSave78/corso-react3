import { createSlice } from "@reduxjs/toolkit";
import { counterSlide } from "./counterSlice";

export const citiesSlice = createSlice({
    name:'cities',
    initialState:{
        value:[
            {
                id:0,
                name:"Tokio",
                description:"Lorem testo di test",
                imgURL:"https://images.unsplash.com/photo-1549693578-d683be217e58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRva2lvfGVufDB8fDB8fHww",
                isVisited:false
              },
              {
                id:1,
                name:"London",
                description:"Lorem testo di test",
                imgURL:"https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TG9uZG9ufGVufDB8fDB8fHww",
                isVisited:true
              },

        ],
    },
    reducers:{
        add:(state, aciton)=>{
            state.value.push(aciton.payload)
        },
    },

})

export const{add} = citiesSlice.actions

export const citiesReducer = citiesSlice.reducer