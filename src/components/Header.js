import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { storeTask } from '../actions';

export const Header = () => {
  const [title, setTitle] = useState('')
  const [dueDate, setDueDate] = useState('');

  const dispatch = useDispatch();

  const createTask = (e) => {
    e.preventDefault();

    dispatch(storeTask(
      title,
      dueDate.toISOString().slice(0, 10).replace('T', ' ')
    ));

    setTitle('');
    setDueDate('');

    document.querySelector('.form-response').innerHTML = '<div class="alert alert-success mt-3 mb-0">Task created successfully!</div>';

    setTimeout(() => {
      document.querySelector('.form-response').innerHTML = '';
    }, 5000);
  }

  return (
    <header className="py-4 bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h2 mb-0">Task Manager</h1>

        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create-task">
          <i className="bi bi-plus-square-dotted"></i>
        </button>

        <div className="modal fade" id="create-task" tabIndex="-1" aria-labelledby="create-task-label" aria-hidden="true">
          <div className="modal-dialog">
            <form
              className="modal-content"
              onSubmit={createTask}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="create-task-label">Create task</h5>

                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>

                  <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>

                <div>
                  <label htmlFor="due-date" className="form-label">Due date</label>

                  <DatePicker
                    className="form-control"
                    id="due-date"
                    dateFormat="yyyy-MM-dd"
                    selected={dueDate}
                    onChange={(date) => setDueDate(date)}
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="form-response"></div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>

                <button type="submit" className="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}
