import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import tarefasJS from '../../data'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: tarefasJS
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
