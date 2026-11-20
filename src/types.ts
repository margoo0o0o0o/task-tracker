export type TaskStatus = 'todo' | 'in-progress' | 'done';

export type Priority = 'low' | 'medium' | 'high';

export interface Subtask {
  id: string;
  title: string;
  done: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  /** Срок в формате YYYY-MM-DD */
  dueDate: string;
  subtasks: Subtask[];
}