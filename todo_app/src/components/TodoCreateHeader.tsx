import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/slice/todoCreateSlice';
import '../css/TodoCreateHeader.css'

function TodoCreateHeader() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<string>('')

  const handleCreateTodo = () =>{
    if(todo.trim().length == 0){
      alert('todo giriniz..')
      return;
    }
    const payload ={
      id:  Math.floor(Math.random() * 999) , 
      content: todo
    }

    dispatch(createTodo(payload))
    setTodo('')

  }

  return (
    <div  className='create-zone col-11'>
      <input className='col-9 mr-2 create-input' value={todo} onChange={((e:React.ChangeEvent<HTMLInputElement>)=>setTodo(e.target.value) )} placeholder='Görev giriniz...' type='text'/>
      <button className='col-2 button btn' style={{background:'#F8B500'}} onClick={handleCreateTodo}>Oluştur</button>
    </div>
  )
}

export default TodoCreateHeader
