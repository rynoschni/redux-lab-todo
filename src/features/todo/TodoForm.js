import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todosSlice'

function TodoForm() {
  const dispatch = useDispatch()
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(task))
    setTask('')
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          aria-label="Task Name"
          placeholder="Task Name"
        />
        <button type='submit'>Add</button>
      </p>
    </form>
  )
}

export default TodoForm