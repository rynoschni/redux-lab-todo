import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: Date.now() + '-todo',
      text: 'Learn Redux',
      complete: false
    }
  ],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state, action) => {
      // create a new todo so that we can find this todo later
      const nextId = Date.now() + '-todo' // e.g. 1661976520102-todo
      // insert the new todo into the front of the todos array so it appears atthe top
      state.items.unshift({
        id: nextId,
        text: action.payload,
        complete: false
      })
    },
    removeTodo: (state, action) => {
      // filter out any todo that matches the id
      state.items = state.items.filter(todo => todo.id !== action.payload)
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
