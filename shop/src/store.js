import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'
import { act } from 'react-dom/test-utils'



let stock = createSlice({
  name : 'stock', 
  initialState : [10, 11, 12]
})

let basket = createSlice({
  name: 'basket',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 }
  ], 
  reducers : {
    addCount(state, action) {
      let 번호 = state.findIndex((a) => { return a.id === action.payload })
      state[번호].count++
    }, 
    addItem(state, action) {
      state.push(action.payload)
    }
  }
})

export let { addCount, addItem } = basket.actions

export default configureStore({
  reducer: { 
      user : user.reducer, 
      stock : stock.reducer,
      basket : basket.reducer
   }
}) 