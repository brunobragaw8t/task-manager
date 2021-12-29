const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_TASK': {
      const id = state.length ? Math.max(...state.map(task => task.id)) + 1 : 1;

      return [
        ...state,
        {
          id: id,
          title: action.payload.title,
          dueDate: action.payload.dueDate,
          completed: false,
        },
      ];
    }

    case 'COMPLETE_TASK': {
      const tasks = [...state];

      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == action.payload) {
          tasks[i].completed = true;
        }
      }

      return tasks;
    }

    case 'UNCOMPLETE_TASK': {
      const tasks = [...state];

      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == action.payload) {
          tasks[i].completed = false;
        }
      }

      return tasks;
    }

    case 'DESTROY_TASK': {
      return state.filter(task => task.id !== action.payload);
    }

    default:
      return state;
  }
}

export default tasksReducer;
