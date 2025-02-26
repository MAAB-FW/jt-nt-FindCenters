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
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos',
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return await response.json();
      } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
      }
    },
  });
};
