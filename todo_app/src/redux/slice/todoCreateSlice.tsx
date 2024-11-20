import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from "../../types/Types";

const initialState: TodoInitialState = {
todos:[]
}

export const todoCreateSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        createTodo: (state: TodoInitialState, actions: PayloadAction<TodoType>) =>{
            state.todos = [...state.todos , actions.payload]
        },
        removeTodoById: (state: TodoInitialState, actions: PayloadAction<number>)=>{
            const remove = state.todos.filter((todo:TodoType)=> todo.id!== actions.payload)
            state.todos = [...remove]
        },
        updateTodo: (state: TodoInitialState, actions: PayloadAction<TodoType>)=>{
            const updateTodo = state.todos.map((todo:TodoType)=> todo.id !== actions.payload.id ? todo : actions.payload);
            state.todos = [...updateTodo]
            

        }
    }
})

export const {createTodo, removeTodoById,updateTodo} = todoCreateSlice.actions
export default todoCreateSlice.reducer