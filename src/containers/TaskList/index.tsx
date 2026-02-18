import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

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

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{termo}&ldquo;
      </p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {filtrarTarefas().map(
          ({ titulo, descricao, prioridade, status, id }) => (
            <li key={id}>
              <Tarefa
                id={id}
                titulo={titulo}
                descricao={descricao}
                prioridade={prioridade}
                status={status}
              />
            </li>
          )
        )}
      </ul>
    </Container>
  )
}

export default TaskList
