import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from './todosSlice'

function TodoList() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.todos.items)
  const handleRemove = (id) => {
    dispatch(removeTodo(id))
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.text}>
          {item.text}
          <button onClick={() => handleRemove(item.id)}>🗑</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList