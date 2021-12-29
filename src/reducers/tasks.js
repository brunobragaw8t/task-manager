const tasksReducer = (state = [{id: 1, title: 'teste', dueDate: '1992-11-01'}], action) => {
  switch (action.type) {
    case 'STORE_TASK':
      const id = state.length ? Math.max(...state.map(task => task.id)) + 1 : 1;

      return [
        ...state,
        {
          id: id,
          title: action.payload.title,
          dueDate: action.payload.dueDate,
        },
      ];

    default:
      return state;
  }
}

export default tasksReducer;
