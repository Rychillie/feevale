'use server';
import { supabase } from '@/lib/subapase';
import { revalidatePath } from 'next/cache';

export interface Todo {
  id: number
  title: string
  is_completed: boolean
}

export async function fetchTodos() {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .order('id', { ascending: true})

  if(error) throw new Error('Error fetching todos: ' + error)
  return data || []
}

export async function addTodo(formData: FormData) {
  const title = formData.get('title') as string;
  if (!title) throw new Error("Title is required");
  
  const { data, error } = await supabase
    .from('todos')
    .insert({  title, is_completed: false})
    .select()

  if (error) throw new Error('Error adding todo: ' + error)
  revalidatePath('/')
  return data[0]
}

export async function toggleTodo(formData: FormData) {
  const id = parseInt(formData.get('id') as string);
  const is_completed = formData.get('is_completed') === 'true';

  const { error } = await supabase
    .from('todos')
    .update({ is_completed: !is_completed})
    .eq('id', id)

  if (error) throw new Error('Error updating todo: ' + error)
  revalidatePath('/')
}

export async function deleteTodo(formData: FormData) {
  const id = parseInt(formData.get('id') as string);

  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id)

  if (error) throw new Error('Error deleting todo: ' + error)
  revalidatePath('/')
}