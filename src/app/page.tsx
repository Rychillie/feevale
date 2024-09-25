import { Suspense } from 'react';
import { addTodo } from './actions';
import List from './list';

export default function Page() {
  return (
    <div className='container mx-auto p-4 w-full'>
      <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
      <form action={addTodo} className='mb-4'>
        <input
          name='title'
          type="text"
          className='border p-2 mr-2 text-black'
          placeholder='New todo'
        />
        <button type="submit" className='bg-blue-500 text-white p-2'>
          Add Todo
        </button>
      </form>

      <Suspense fallback={<p>Loading...</p>}>
        <ul>
          <List />
        </ul>
      </Suspense>
    </div>
  );
}
