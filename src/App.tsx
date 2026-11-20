import { mockTasks } from './data/mockTasks';

function App() {
  return (
    <main>
      <h1>TaskFlow</h1>
      <ul>
        {mockTasks.map((task) => (
          <li key={task.id}>
            {task.title} — {task.status} ({task.priority}), due {task.dueDate}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;