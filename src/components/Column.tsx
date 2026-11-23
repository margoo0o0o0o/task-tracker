import type { Task, TaskStatus } from '../types';
import { PlusIcon } from './Icons';
import { TaskCard } from './TaskCard';

interface ColumnProps {
  title: string;
  status: TaskStatus;
  tasks: Task[];
}

export function Column({ title, status, tasks }: ColumnProps) {
  return (
    <section className="column">
      <div className="column__header">
        <span className={`column__dot column__dot--${status}`} aria-hidden="true" />
        <h2 className="column__title">{title}</h2>
        <span className="column__count">({tasks.length})</span>
        <button
          type="button"
          className="column__add"
          aria-label={`Add task to ${title}`}
        >
          <PlusIcon />
        </button>
      </div>
      <div className="column__list">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}
