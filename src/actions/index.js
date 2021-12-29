export const storeTask = (title, dueDate) => {
  return {
    type: 'STORE_TASK',
    payload: {
      title: title,
      dueDate: dueDate,
    },
  }
}

export const completeTask = (id) => {
  return {
    type: 'COMPLETE_TASK',
    payload: id,
  }
}

export const uncompleteTask = (id) => {
  return {
    type: 'UNCOMPLETE_TASK',
    payload: id,
  }
}

export const destroyTask = (id) => {
  return {
    type: 'DESTROY_TASK',
    payload: id,
  }
}
