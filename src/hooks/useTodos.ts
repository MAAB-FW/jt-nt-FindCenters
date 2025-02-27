import {useQuery} from '@tanstack/react-query';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: async (): Promise<Todo[]> => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return await res.json();
      } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
      }
    },
  });
};
