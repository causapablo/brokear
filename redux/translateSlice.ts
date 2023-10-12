import { Dispatch } from 'redux'
import { createSlice } from '@reduxjs/toolkit'

interface Redux {
    getState: any
    dispatch: Dispatch<any>
}


// esto cambialo según necesites. lo puse sólo para que no chille el eslint y quede el reducer bien armado
interface TranslateState {
    switch: boolean
}

// ésta sería la función que tendrías que usar para hacer el switch o traducción. cuando necesites usarla solo importala en el componente
// y fijate si funciona
export const fetchData = (): void  =>{
    console.log(0)
}

export const translate = createSlice({
    name: 'translate',
    initialState: {
      data: [],
    } 
    // as TranslateState ----- esto está comentado porque me tira un error y necesita tener la información correcta para unirla al estado de la linea 11
    ,
    reducers: {},
    extraReducers: builder => {
      builder.addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload
      })
    }
  })

  export default translate.reducer