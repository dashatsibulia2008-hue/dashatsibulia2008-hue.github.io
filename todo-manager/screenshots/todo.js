let tasks = [];
let nextId = 1;

function resetTasks() {
  tasks = [];
  nextId = 1;
}

function getTasks() {
  return [...tasks];
}

function addTask(title, priority = 'medium') {
  if (!title || typeof title !== 'string' || title.trim() === '') {
    console.error('Validation Error: Task title cannot be empty.');
    return null;
  }

  const validPriorities = ['low', 'medium', 'high'];
  const taskPriority = validPriorities.includes(priority.toLowerCase())
    ? priority.toLowerCase()
    : 'medium';

  const newTask = {
    id: nextId++,
    title: title.trim(),
    completed: false,
    priority: taskPriority
  };

  tasks.push(newTask);
  return newTask;
}

function showTasks() {
  if (tasks.length === 0) {
    console.log('No tasks available.');
    return;
  }

  console.log('\n--- Task List ---');
  for (const task of tasks) {
    const status = task.completed ? '[x]' : '[ ]';
    console.log(`${status} ${task.id} - ${task.title} (${task.priority})`);
  }
}

function markCompleted(id) {
  const task = tasks.find(t => t.id === id);

  if (!task) {
    console.error(`Error: Task with ID ${id} not found.`);
    return null;
  }

  task.completed = true;
  return task;
}

function removeTask(id) {
  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    console.error(`Error: Cannot remove task. ID ${id} does not exist.`);
    return false;
  }

  const [removed] = tasks.splice(index, 1);
  console.log(`Task "${removed.title}" (ID: ${id}) removed successfully.`);
  return true;
}

function findTask(keyword) {
  if (!keyword || typeof keyword !== 'string') {
    console.warn('Search Error: Please provide a valid keyword.');
    return [];
  }

  const term = keyword.toLowerCase();
  return tasks.filter(task => task.title.toLowerCase().includes(term));
}

function countTasks() {
  const total = tasks.length;
  console.log(`Total tasks: ${total}`);
  return total;
}

function countCompletedTasks() {
  const completed = tasks.filter(task => task.completed).length;
  console.log(`Completed tasks: ${completed}`);
  return completed;
}

function exportTasks() {
  return JSON.stringify(tasks, null, 2);
}

function importTasks(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    if (!Array.isArray(data)) {
      throw new Error('Imported payload must be an array of tasks.');
    }

    tasks = data;
    const maxId = tasks.reduce((max, t) => (t.id > max ? t.id : max), 0);
    nextId = maxId + 1;
    return true;
  } catch (err) {
    console.error('Import Failed:', err.message);
    return false;
  }
}

function sortByName() {
  tasks.sort((a, b) => a.title.localeCompare(b.title));
}

function sortByPriority() {
  const ranks = { high: 1, medium: 2, low: 3 };
  tasks.sort((a, b) => (ranks[a.priority] || 4) - (ranks[b.priority] || 4));
}

function getStatistics() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const open = total - completed;
  const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return { total, completed, open, rate };
}

module.exports = {
  tasks,
  resetTasks,
  getTasks,
  addTask,
  showTasks,
  markCompleted,
  removeTask,
  findTask,
  countTasks,
  countCompletedTasks,
  exportTasks,
  importTasks,
  sortByName,
  sortByPriority,
  getStatistics
};