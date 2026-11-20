import { PlusIcon } from './Icons';

interface ProjectHeaderProps {
  title: string;
  description: string;
}

export function ProjectHeader({ title, description }: ProjectHeaderProps) {
  return (
    <header className="project-header">
      <div>
        <div className="project-header__title-row">
          <h1 className="project-header__title">{title}</h1>
          <span className="project-header__dot" aria-hidden="true" />
        </div>
        <p className="project-header__description">{description}</p>
      </div>
      <button type="button" className="button-primary">
        <PlusIcon />
        Add Task
      </button>
    </header>
  );
}