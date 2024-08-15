import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'
import { Produtos } from '../../containers/styles'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const material = action.payload

      if (state.itens.find((material) => material.id === Produtos.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(material)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
