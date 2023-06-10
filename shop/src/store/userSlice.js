import { createSlice } from "@reduxjs/toolkit"

let user = createSlice({
  name : 'user', 
  initialState : {name : 'kim', age : 20},
  reducers : {
    changeName(state) {
      state.name = 'PARK'
    }, 
    changeAge(state, action) {
      state.age += action.payload
    }
  }
})

export let { changeName, changeAge } = user.actions

export default user