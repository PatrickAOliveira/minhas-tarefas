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
      state['itens'] = [
        ...state['itens'].filter((t) => t['id'] !== action['payload'])
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefa = state['itens'].findIndex(
        (t) => t['id'] === action['payload']['id']
      )

      if (indexTarefa >= 0) {
        state['itens'][indexTarefa] = action['payload']
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaJaExiste = state['itens'].find(
        (t) =>
          t['titulo'].toLowerCase() ===
          action['payload']['titulo'].toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        state['itens'].push(action['payload'])
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefasSlice['actions']

export default tarefasSlice['reducer']
