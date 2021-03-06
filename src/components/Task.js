import { useDispatch } from 'react-redux';
import { completeTask, uncompleteTask, destroyTask } from '../actions';

export const Task = ({ row }) => {
  const dispatch = useDispatch();

  const dueDate = new Date(row.dueDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let dueDateColor = '';
  let dueDateIcon = '';

  if (dueDate.getTime() < today.getTime()) {
    dueDateColor = 'text-danger';
    dueDateIcon = 'exclamation-circle-fill';
  } else if (dueDate.getTime() == today.getTime()) {
    dueDateColor = 'text-warning';
    dueDateIcon = 'exclamation-triangle';
  }

  const markCompletedTask = (id) => {
    dispatch(completeTask(id));
  }

  const markUncompletedTask = (id) => {
    dispatch(uncompleteTask(id));
  }

  const deleteTask = (id) => {
    dispatch(destroyTask(id));
  }

  return (
    <div key={row.id} className="tasks-item mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {row.title}
          </h5>

          <p className="card-text">
            <i className="bi bi-calendar3"></i>
            &nbsp;
            Due date:
            &nbsp;

            {!row.completed ? (
              <span className={dueDateColor}>
                {row.dueDate}

                {dueDateIcon && (
                  <i className={`ms-1 bi bi-${dueDateIcon}`}></i>
                )}
              </span>
            ) : (
              <span>
                {row.dueDate}
              </span>
            )}
          </p>
        </div>

        <div className="card-footer d-flex justify-content-between">
          {!row.completed ? (
            <button
              type="button"
              className="btn btn-light btn-sm"
              onClick={() => markCompletedTask(row.id)}
            >
              <i className="bi bi-check-square text-success"></i>
              &nbsp;
              Mark as completed
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-light btn-sm"
              onClick={() => markUncompletedTask(row.id)}
            >
              <i className="bi bi-x-square text-danger"></i>
              &nbsp;
              Mark as uncompleted
            </button>
          )}

          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => deleteTask(row.id)}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
