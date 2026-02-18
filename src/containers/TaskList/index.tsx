import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'

const TaskList = () => {
  const { itens } = useSelector((state: RootReducer) => state['tarefas'])
  const { termo } = useSelector((state: RootReducer) => state['filtro'])

  const filtrarTarefas = () => {
    return itens.filter(
      (t) => t['titulo'].toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{termo}&ldquo;
      </p>
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
