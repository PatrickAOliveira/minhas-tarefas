import { Provider } from 'react-redux'
import Sidebar from './containers/Sidebar'
import TaskList from './containers/TaskList'
import EstiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <TaskList />
      </Container>
    </Provider>
  )
}

export default App
