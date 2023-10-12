/* eslint-disable react/prop-types */
import style from "./TodoItem.module.css"

const TodoItem = ( { todo, deleteTodo, completedTodo, setEdit } ) => {
  return (
    <li className={ style.list }>
      <div className={ `${style.listItem} ${todo.complete ? style.completed : ""}` }>
        { todo.title }
      </div>
      <div>
        <button onClick={ () => deleteTodo(todo) }>D</button>
        <button onClick={ () => completedTodo(todo) }>C</button>
        <button onClick={ () => setEdit(todo) }>E</button>
      </div>
    </li>
  )
}

export default TodoItem