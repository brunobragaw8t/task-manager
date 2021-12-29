export const storeTask = (title, dueDate) => {
  return {
    type: 'STORE_TASK',
    payload: {
      title: title,
      dueDate: dueDate,
    },
  }
}
