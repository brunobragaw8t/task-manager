import { useState } from 'react';
import DatePicker from 'react-datepicker';

export const Header = () => {
  const [title, setTitle] = useState('')
  const [dueDate, setDueDate] = useState('');

  return (
    <header className="py-4 bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h2 mb-0">Task Manager</h1>

        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create-task">
          <i class="bi bi-plus-square-dotted"></i>
        </button>

        <div className="modal fade" id="create-task" tabindex="-1" aria-labelledby="create-task-label" aria-hidden="true">
          <div className="modal-dialog">
            <form className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title" id="create-task-label">Create task</h5>

                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="title" class="form-label">Title</label>

                  <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="mb-3">
                  <label htmlFor="due-date" class="form-label">Due date</label>

                  <DatePicker
                    className="form-control"
                    id="due-date"
                    dateFormat="yyyy-MM-dd"
                    selected={dueDate}
                    onChange={(date) => setDueDate(date)}
                  />
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>

                <button type="submit" class="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}
