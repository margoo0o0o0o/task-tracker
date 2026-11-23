import type { Task } from '../types';

export type TaskAction =
  | { type: 'add'; task: Task }
  | { type: 'update'; task: Task }
  | { type: 'delete'; id: string };

function assertNever(value: never): never {
  throw new Error(`Unhandled action: ${JSON.stringify(value)}`);
}

export function taskReducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case 'add':
      return [...state, action.task];
    case 'update':
      return state.map((task) =>
        task.id === action.task.id ? action.task : task,
      );
    case 'delete':
      return state.filter((task) => task.id !== action.id);
    default:
      return assertNever(action);
  }
}