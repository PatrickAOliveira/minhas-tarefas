import Tarefa from '../../components/Tarefa'
import tarefas from '../../data'
import { Container } from './styles'

const TaskList = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map(({ titulo, descricao, prioridade, status }) => (
        <li key={titulo}>
          <Tarefa
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

export default TaskList
