import { useSelector } from 'react-redux';
import { Task } from './Task';

export const Tasks = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div className="py-5">
      <div className="container">
        <h4 className="mb-0 text-center">To-do</h4>

        {tasks.length ? (
          <div className="tasks-list">
            {tasks.map(task => (
              <Task row={task} />
            ))}
          </div>
        ) : (
          <div className="alert alert-success mt-3">
            Nothing more to do. Go enjoy your favourite TV show. <i className="bi bi-emoji-smile"></i>
          </div>
        )}

        <h4 className="mt-5 text-center">Completed tasks</h4>
      </div>
    </div>
  )
}
