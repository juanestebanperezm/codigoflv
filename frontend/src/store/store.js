import { configureStore, } from '@reduxjs/toolkit'
import { RegisterReducer } from '../features/register'


export const store = configureStore({
  reducer: {
    register: RegisterReducer,
  },
  
})