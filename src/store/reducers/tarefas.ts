import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import tarefasData from '../../data'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: tarefasData
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state['itens'] = state['itens'].filter(
        (tarefa) => tarefa['id'] !== action['payload']
      )
    }
  }
})

export const { remover } = tarefasSlice['actions']

export default tarefasSlice['reducer']
