import { useSelector } from 'react-redux';

export const Tasks = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div className="py-5">
      <div className="container">
        <h3>Tasks</h3>

        {tasks.map(task => (
          <div key={task.id} className="tasks-item">
            <h6>{task.title}</h6>
            {task.dueDate}
          </div>
        ))}
      </div>
    </div>
  )
}
