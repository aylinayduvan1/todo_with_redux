import { MdDeleteOutline } from "react-icons/md";
import { TodoType } from '../types/Types'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/slice/todoCreateSlice";
import { useState } from "react";
import '../css/Todo.css'

interface TodoProps {
  todo: TodoType
}

function Todo({todo} : TodoProps ) {

  const { id, content } = todo;
  const dispatch = useDispatch();
  const [editable,setEditable] = useState<boolean>(false)
  const [newTodo,setNewTodo] = useState<string>(content)


  const handleRomeveTodo = ()=>{
    dispatch(removeTodoById(id))
  }

  const handleUpdateTodo = ()=>{
    const payload: TodoType ={
      id: id,
      content: newTodo
    }
    dispatch(updateTodo(payload))
    setEditable(false)

  }

  return (
    <div className="todo">
      {
        editable ? 
        <input value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)} className='col-9  todo-edit' /> :  <div>{content}</div>

      }
    <div>
    <MdDeleteOutline onClick={handleRomeveTodo} style={{marginRight:'10px'}}/>
    {
      editable  ? <FaCheck onClick={handleUpdateTodo} /> :  <FaEdit onClick={()=> setEditable(!editable)} />

    }

    </div>
      </div>
  )
}

export default Todo
