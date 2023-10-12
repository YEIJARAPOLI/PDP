/* eslint-disable no-undef */
import style from "./App.module.css"
import Header from "./components/header/Header"
import Form from "./components/form/Form"
import { useState } from "react"
import TodoList from "./components/todoList/TodoList"

const App = () => {

  const [inputTodo, setInputTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [edit, setEdit] = useState(null)

  return (
    <div className={ style.container }>
      <div className={ style.appwrapper }>
        <Header/>
        <Form inputTodo={ inputTodo } setInputTodo={ setInputTodo } todos={ todos } setTodos={ setTodos } edit={ edit } setEdit={ setEdit } />
        <TodoList todos={ todos } setTodos={ setTodos } setEdit={ setEdit } />
      </div>
    </div>
  )
}

export default App