import { useEffect, useReducer } from 'react';
import type { Dispatch } from 'react';
import { mockTasks } from '../data/mockTasks';
import { taskReducer } from '../state/taskReducer';
import type { TaskAction } from '../state/taskReducer';
import type { Task } from '../types';
import { isTaskArray } from '../utils/guards';
import { useLocalStorage } from './useLocalStorage';

const STORAGE_KEY = 'task-tracker:tasks';

export function useTasks(): [Task[], Dispatch<TaskAction>] {
  const [storedTasks, setStoredTasks] = useLocalStorage<Task[]>(
    STORAGE_KEY,
    mockTasks,
    isTaskArray,
  );
  const [tasks, dispatch] = useReducer(taskReducer, storedTasks);

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks, setStoredTasks]);

  return [tasks, dispatch];
}