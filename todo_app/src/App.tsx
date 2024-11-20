import './App.css'
import TodoCreateHeader from './components/TodoCreateHeader'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='container-fulied'>
      <div className="todo-card col-lg-5 col-sm-8 ">
      <TodoCreateHeader/>
      <TodoList/>
      </div>
    </div>
  )
}

export default App
