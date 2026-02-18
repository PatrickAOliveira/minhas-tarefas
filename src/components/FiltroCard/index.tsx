import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

import * as S from './styles'
import * as enums from '../../utils/enums/task'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const msmCriterio = filtro['criterio'] === criterio
    const msmValor = filtro['valor'] === valor

    return msmCriterio && msmValor
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contaTarefas = () => {
    switch (criterio) {
      case 'todas':
        return tarefas['itens'].length
      case 'prioridade':
        return tarefas['itens'].filter((t) => t['prioridade'] === valor).length
      case 'status':
        return tarefas['itens'].filter((t) => t['status'] === valor).length
    }
  }

  const ativo = verificaEstaAtivo()
  const contador = contaTarefas()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
