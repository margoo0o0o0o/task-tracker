import type { Task, TaskStatus } from '../types';
import { Column } from './Column';

interface ColumnConfig {
  status: TaskStatus;
  title: string;
}

const COLUMNS: ColumnConfig[] = [
  { status: 'todo', title: 'To Do' },
  { status: 'in-progress', title: 'In Progress' },
  { status: 'done', title: 'Done' },
];

interface BoardProps {
  tasks: Task[];
}

export function Board({ tasks }: BoardProps) {
  return (
    <div className="board">
      {COLUMNS.map(({ status, title }) => (
        <Column
          key={status}
          title={title}
          status={status}
          tasks={tasks.filter((task) => task.status === status)}
        />
      ))}
    </div>
  );
}
