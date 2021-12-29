export const Task = ({ row }) => {
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
            <span
              className={dueDateColor}
            >
              {row.dueDate}

              {dueDateIcon && (
                <i className={`ms-1 bi bi-${dueDateIcon}`}></i>
              )}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
