const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_TASK':
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

    default:
      return state;
  }
}

export default tasksReducer;
