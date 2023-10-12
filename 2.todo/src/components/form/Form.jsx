/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react"
import TodoList from "../todoList/TodoList"
import style from "./Form.module.css"
import uuid4 from "uuid4"

const Form = ( { inputTodo, setInputTodo, todos, setTodos, edit, setEdit }) => {

    const handlerSubmit = (e) => {
        e.preventDefault()

        if (edit) {
            setTodos( todos.map( (item) => item.id === edit.id ? { ...edit, title: inputTodo } : item ) )
        } else {
            const newTodo = {
                id: uuid4(),
                title: inputTodo,
                completed: false
            }

            setTodos([...todos, newTodo])
        }

        setInputTodo("")
        setEdit(null)
    }

    useEffect(() => {
      if (edit) setInputTodo(edit.title)
      else setInputTodo("")
    }, [edit])
    

    return (
        <div>
            <form onSubmit={ handlerSubmit }>
                <input type="text" className={ style.taskInput } value={ inputTodo } onChange={ (e) => setInputTodo(e.target.value) }/>
                <button type="submit" className={ style.button }>{ edit ? "Edit" : "Add" }</button>
            </form>
        </div>
    )
}

export default Form