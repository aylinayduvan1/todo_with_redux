import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import Todo from './Todo'
import { TodoType } from '../types/Types'
import '../css/TodoList.css'

function TodoList() {

  const {todos} = useSelector((state:RootState) =>state.todo)
  return (
    <div className='col-11 list-zone'>
      {
        todos && todos.map((todo: TodoType)=>(
          <Todo key={todo.id} todo={todo}/>
        ))
      }
    </div>
  )
}

export default TodoList
