import type { Priority, Task } from '../types';
import { formatDate } from '../utils/formatDate';
import { CalendarIcon, CheckSquareIcon } from './Icons';

const PRIORITY_LABELS: Record<Priority, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
};

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const totalSubtasks = task.subtasks.length;
  const doneSubtasks = task.subtasks.filter((subtask) => subtask.done).length;

  return (
    <article className="card">
      <div className="card__top">
        <h3 className="card__title">{task.title}</h3>
        <span className={`badge badge--${task.priority}`}>
          {PRIORITY_LABELS[task.priority]}
        </span>
      </div>
      <div className="card__meta">
        <span className="card__meta-item">
          <CalendarIcon />
          <time dateTime={task.dueDate}>{formatDate(task.dueDate)}</time>
        </span>
        {totalSubtasks > 0 && (
          <span className="card__meta-item">
            <CheckSquareIcon />
            {doneSubtasks} / {totalSubtasks}
          </span>
        )}
      </div>
    </article>
  );
}
