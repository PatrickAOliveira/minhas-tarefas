import Sidebar from './containers/Sidebar'
import TaskList from './containers/TaskList'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <div>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <TaskList />
      </Container>
    </div>
  )
}

export default App
