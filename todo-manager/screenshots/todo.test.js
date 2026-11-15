if (typeof require !== 'undefined') {
  var {
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
  } = require('./todo');
}

function runTests() {
  console.log('====================================');
  console.log('🧪 RUNNING TO-DO MANAGER TEST SUITE');
  console.log('====================================\n');

  resetTasks();

  console.log('▶ Test 1: Add Tasks (5 items)');
  addTask('Complete JavaScript Lab 02', 'high');
  addTask('Practice Array Higher-Order Methods', 'high');
  addTask('Set up GitHub Repository and Pages', 'medium');
  addTask('Write Readme Documentation', 'low');
  addTask('Verify JSON Export Format', 'medium');
  showTasks();

  console.log('\n▶ Test 2: Input Validation (Empty Title)');
  addTask('');
  addTask('   ');

  console.log('\n▶ Test 3: Mark Task as Completed');
  markCompleted(1);
  markCompleted(3);
  markCompleted(999);
  showTasks();

  console.log('\n▶ Test 4: Search Tasks ("array")');
  const searchResults = findTask('array');
  console.log('Found:', searchResults);

  console.log('\n▶ Test 5: Remove Task (ID: 4)');
  removeTask(4);
  removeTask(999);
  showTasks();

  console.log('\n▶ Test 6: Counters and Statistics');
  countTasks();
  countCompletedTasks();
  const stats = getStatistics();
  console.log(`Statistics -> Open: ${stats.open}, Completion Rate: ${stats.rate}%`);

  console.log('\n▶ Test 7: Sorting by Priority');
  sortByPriority();
  showTasks();

  console.log('\n▶ Test 8: JSON Export & Import');
  const jsonExport = exportTasks();
  console.log('Exported JSON:\n', jsonExport);

  resetTasks();
  console.log(`\nState reset. Tasks in memory: ${getTasks().length}`);

  importTasks(jsonExport);
  console.log('Re-imported from JSON successfully:');
  showTasks();

  console.log('\n====================================');
  console.log('✅ ALL TESTS EXECUTED SUCCESSFULLY');
  console.log('====================================');
}

runTests();