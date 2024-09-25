'use server';

import { deleteTodo, fetchTodos, toggleTodo } from './actions';

export default async function List() {
  const todos = await fetchTodos();

  return todos.map((todo) => (
      <li key={todo.id} className='flex items-center mb-2'>
        <form action={toggleTodo} className="mr-2">
          <input type="hidden" name="id" value={todo.id} />
          <input type="hidden" name="is_completed" value={String(todo.is_completed)} />
          <button type='submit' className='flex items-center'>
            <input
              type="checkbox"
              checked={todo.is_completed}
              className='mr-2 cursor-pointer'
              readOnly
            />
            <span className={todo.is_completed ? 'line-through' : ''}>
              {todo.title}
            </span>
          </button>
        </form>
        <form action={deleteTodo}>
        <input type="hidden" name="id" value={todo.id} />
          <button type='submit' className='ml-2 text-red-500'>
            Delete
          </button>
        </form>
      </li>
    )
  )
}