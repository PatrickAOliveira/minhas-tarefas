import BtnAdicionar from '../../components/BtnAdicionar'
import Sidebar from '../../containers/Sidebar'
import TaskList from '../../containers/TaskList'

const Home = () => (
  <>
    <Sidebar />
    <TaskList />
    <BtnAdicionar />
  </>
)

export default Home
