import { Board } from './components/Board';
import { ProgressBar } from './components/ProgressBar';
import { ProjectHeader } from './components/ProjectHeader';
import { useTasks } from './hooks/useTasks';
import { getProgressPercent } from './utils/progress';

function App() {
  const [tasks] = useTasks();
  const percent = getProgressPercent(tasks);

  return (
    <main className="page">
      <ProjectHeader
        title="Website Redesign"
        description="Redesign company website with new branding"
      />
      <ProgressBar percent={percent} />
      <Board tasks={tasks} />
    </main>
  );
}

export default App;
