import { useSelector } from 'react-redux';
import { Task } from './Task';

export const Tasks = () => {
  const tasks = useSelector(state => state.tasks);

  const todo = [...tasks].filter(task => !task.completed).sort((a, b) => {
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  const completed = [...tasks].filter(task => task.completed).sort((a, b) => {
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  return (
    <div className="py-5">
      <div className="container">
        <h4 className="mb-0 text-center">To-do</h4>

        {todo.length ? (
          <div className="tasks-list">
            {todo.map(task => (
              <Task row={task} />
            ))}
          </div>
        ) : (
          <div className="alert alert-success mt-3">
            Nothing more to do. Go enjoy your favourite TV show. <i className="bi bi-emoji-smile"></i>
          </div>
        )}

        <h4 className="mt-5 mb-0 text-center">Completed tasks</h4>

        {completed.length ? (
          <div className="tasks-list">
            {completed.map(task => (
              <Task row={task} />
            ))}
          </div>
        ) : (
          <div className="alert alert-info mt-3">
            You haven't completed any tasks.
          </div>
        )}
      </div>
    </div>
  )
}
