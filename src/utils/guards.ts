import type { Priority, Subtask, Task, TaskStatus } from '../types';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isTaskStatus(value: unknown): value is TaskStatus {
  return value === 'todo' || value === 'in-progress' || value === 'done';
}

function isPriority(value: unknown): value is Priority {
  return value === 'low' || value === 'medium' || value === 'high';
}

export function isSubtask(value: unknown): value is Subtask {
  return (
    isRecord(value) &&
    typeof value.id === 'string' &&
    typeof value.title === 'string' &&
    typeof value.done === 'boolean'
  );
}

export function isTask(value: unknown): value is Task {
  return (
    isRecord(value) &&
    typeof value.id === 'string' &&
    typeof value.title === 'string' &&
    typeof value.description === 'string' &&
    isTaskStatus(value.status) &&
    isPriority(value.priority) &&
    typeof value.dueDate === 'string' &&
    Array.isArray(value.subtasks) &&
    value.subtasks.every(isSubtask)
  );
}

export function isTaskArray(value: unknown): value is Task[] {
  return Array.isArray(value) && value.every(isTask);
}