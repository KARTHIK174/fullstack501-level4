const todoList = () => {
  let all = [];

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const currentDate = new Date();
    return all.filter(
      (item) => new Date(item.dueDate) < currentDate && !item.completed,
    );
  };

  const dueToday = () => {
    const currentDate = new Date().toLocaleDateString("en-CA");
    return all.filter(
      (item) => item.dueDate === currentDate && !item.completed,
    );
  };

  const dueLater = () => {
    const currentDate = new Date().toLocaleDateString("en-CA");
    return all.filter(
      (item) =>
        new Date(item.dueDate) > new Date(currentDate) && !item.completed,
    );
  };

  const toDisplayableList = (list) => {
    return list.map((item) => {
      const completionMark = item.completed ? "[x]" : "[ ]";
      const dueDateMark =
        item.dueDate === new Date().toLocaleDateString("en-CA")
          ? " (Due Today)"
          : "";
      return `${completionMark} ${item.title}${dueDateMark}`;
    });
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;

//   const todos = todoList();

//   todos.add({ title: 'Submit assignment', dueDate: '2023-12-27', completed: false });
//   todos.add({ title: 'Pay rent', dueDate: '2023-12-28', completed: true });
//   todos.add({ title: 'Service Vehicle', dueDate: '2023-12-28', completed: false });
//   todos.add({ title: 'File taxes', dueDate: '2023-12-29', completed: false });
//   todos.add({ title: 'Pay electric bill', dueDate: '2023-12-29', completed: false });

//   const overdueTasks = todos.overdue();
//   const formattedOverdues = todos.toDisplayableList(overdueTasks);
//   console.log('Overdue Tasks:', formattedOverdues);

//   const dueTodayTasks = todos.dueToday();
//   const formattedDueToday = todos.toDisplayableList(dueTodayTasks);
//   console.log('Due Today Tasks:', formattedDueToday);

//   const dueLaterTasks = todos.dueLater();
//   const formattedDueLater = todos.toDisplayableList(dueLaterTasks);
//   console.log('Due Later Tasks:', formattedDueLater);
