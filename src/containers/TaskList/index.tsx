import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container, Resultado } from './styles'

import { RootReducer } from '../../store'

const TaskList = () => {
  const { itens } = useSelector((state: RootReducer) => state['tarefas'])
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state['filtro']
  )

  const filtrarTarefas = () => {
    let tarefasFiltradas = itens

    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (t) => t['titulo'].toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (t) => t['prioridade'] === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter((t) => t['status'] === valor)
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResult = (quant: number) => {
    let msg = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      msg = `${quant} tarefa(s) encontrada(s) como: todas ${complementacao}`
    } else {
      msg = `${quant} tarefa(s) encontrada(s) como: "${`${criterio}=${valor}`}" ${complementacao}`
    }

    return msg
  }

  const tarefas = filtrarTarefas()
  const mensagem = exibeResult(tarefas.length)

  return (
    <Container>
      <Resultado>{mensagem}</Resultado>
      <ul>
        {tarefas.map(({ titulo, descricao, prioridade, status, id }) => (
          <li key={id}>
            <Tarefa
              id={id}
              titulo={titulo}
              descricao={descricao}
              prioridade={prioridade}
              status={status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TaskList
