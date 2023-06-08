import { configureStore, createSlice } from '@reduxjs/toolkit'


let user = createSlice({
  name : 'user', 
  initialState : '김',
  reducers : {
    changeName(state) {
      return state + '채원' 
    }
  }
})

export let { changeName } = user.actions

let stock = createSlice({
  name : 'stock', 
  initialState : [10, 11, 12]
})

let basket = createSlice({
  name: 'basket',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 }
  ]
})


export default configureStore({
  reducer: { 
      user : user.reducer, 
      stock : stock.reducer,
      basket : basket.reducer
   }
}) 