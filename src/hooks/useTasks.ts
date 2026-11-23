import { useEffect, useReducer } from 'react';
import type { Dispatch } from 'react';
import { mockTasks } from '../data/mockTasks';
import { taskReducer } from '../state/taskReducer';
import type { TaskAction } from '../state/taskReducer';
import type { Task } from '../types';
import { isTaskArray } from '../utils/guards';

const STORAGE_KEY = 'task-tracker:tasks';

// читаем из localStorage 1 раз при старте
function initTasks(): Task[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return mockTasks;
    
    const parsed: unknown = JSON.parse(raw);
    return isTaskArray(parsed) ? parsed : mockTasks;
  } catch {
    return mockTasks;
  }
}

export function useTasks(): [Task[], Dispatch<TaskAction>] {
  // useReducer берет начальное значение из initTasks()
  const [tasks, dispatch] = useReducer(taskReducer, undefined, initTasks);

  // сохраняем в localStorage при каждом изменении
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // если хранилище недоступно, просто игнорируем
    }
  }, [tasks]);

  return [tasks, dispatch];
}