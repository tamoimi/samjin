import { configureStore, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: [
       
    ],
    reducers : { //setstate 영역임 > 수정이 되어야 함 //function을 나열함
        addCount(state, action) {
            let number = state.findIndex((findId) => {return findId.id === action.payload}) //action의 대상이 되는것을 payload로 받는다 
            state[number].count++
        },

        minusCount(state, action) {
            let number = state.findIndex((findId)=>{return findId.id === action.payload})
            if(state[number].count > 1) state[number].count--
        },

        addItem(state, action){
            state.push(action.payload)
        }
    }
})

export let { addCount, minusCount, addItem } = cart.actions //cart의 setstate이다




export default configureStore({
    reducer : {
        cart : cart.reducer 
    }
})