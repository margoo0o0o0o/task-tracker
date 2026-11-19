import type { Task } from '../types';

export const mockTasks: Task[] = [
  // задачи из макета
  {
    id: 'task-1',
    title: 'Content migration',
    description: 'Move all existing articles and pages to the new CMS.',
    status: 'todo',
    priority: 'low',
    dueDate: '2023-10-25',
    subtasks: [],
  },
  {
    id: 'task-2',
    title: 'Implement responsive layout',
    description: 'Make the main pages work on tablets and phones.',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2023-10-18',
    subtasks: [
      { id: 'sub-2-1', title: 'Set up breakpoints', done: true },
      { id: 'sub-2-2', title: 'Adapt cards grid', done: false },
      { id: 'sub-2-3', title: 'Test on real devices', done: false },
    ],
  },
  {
    id: 'task-3',
    title: 'Design homepage mockup',
    description: 'Prepare the homepage design in Figma and get approval.',
    status: 'done',
    priority: 'high',
    dueDate: '2023-10-15',
    subtasks: [
      { id: 'sub-3-1', title: 'Create wireframes', done: true },
      { id: 'sub-3-2', title: 'Pick color palette', done: true },
      { id: 'sub-3-3', title: 'Get design approval', done: true },
    ],
  },

  // дополнительные задачи
  {
    id: 'task-4',
    title: 'Write API documentation',
    description: 'Describe all public endpoints with request and response examples.',
    status: 'todo',
    priority: 'medium',
    dueDate: '2023-10-30',
    subtasks: [
      { id: 'sub-4-1', title: 'List all endpoints', done: false },
      { id: 'sub-4-2', title: 'Add request examples', done: false },
    ],
  },
  {
    id: 'task-5',
    title: 'Fix login form validation',
    description: 'Show clear error messages for empty and invalid fields.',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2023-10-20',
    subtasks: [
      { id: 'sub-5-1', title: 'Validate email format', done: true },
      { id: 'sub-5-2', title: 'Validate password length', done: false },
      { id: 'sub-5-3', title: 'Show inline errors', done: false },
    ],
  },
  {
    id: 'task-6',
    title: 'Set up CI pipeline',
    description: 'Run lint and build on every pull request.',
    status: 'done',
    priority: 'low',
    dueDate: '2023-10-10',
    subtasks: [],
  },
];