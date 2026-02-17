import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'

const TaskList = () => {
  const { itens } = useSelector((state: RootReducer) => state['tarefas'])

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {itens.map(({ titulo, descricao, prioridade, status, id }) => (
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
