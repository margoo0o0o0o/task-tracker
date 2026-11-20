import type { Task } from '../types';

export function getProgressPercent(tasks: Task[]): number {
  if (tasks.length === 0) {
    return 0;
  }
  const doneCount = tasks.filter((task) => task.status === 'done').length;
  return Math.round((doneCount / tasks.length) * 100);
}