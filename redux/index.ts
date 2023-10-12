// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import translate from "./translateSlice"

export const store = configureStore({
    reducer: {
      translate
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false
      })
  })
  
  export type AppDispatch = typeof store.dispatch
  export type RootState = ReturnType<typeof store.getState>