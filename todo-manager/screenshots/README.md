# To-Do List Manager

A lightweight console-based task management utility implemented in modern JavaScript. Built to demonstrate core fundamentals of objects, arrays, loops, error validation, and JSON serialization.

---

## Features

- **Task Creation (`addTask`)**: Adds tasks with automatic ID generation, priority labels, and strict title validation.
- **Task Display (`showTasks`)**: Iterates over data using loops, outputting readable completion markers (`[x]` / `[ ]`).
- **Status Updates (`markCompleted`)**: Updates completion flags with nonexistent ID checks.
- **Task Removal (`removeTask`)**: Deletes items by ID with validation.
- **Search Engine (`findTask`)**: Case-insensitive substring query on titles.
- **Metrics & Stats**: Total and completed task counting plus completion rate calculation.
- **Sorting**: Order tasks alphabetically or by priority rank.
- **JSON Pipeline (`exportTasks`, `importTasks`)**: Serialize to formatted JSON and import data with automatic state and ID sequence recovery.

---

## Project Structure

- `screenshots/test-suite.png` — terminal or console execution screenshot
- `todo.js` — core task management functions
- `todo.test.js` — test and demonstration script
- `README.md` — project documentation

---

## Getting Started

Run the test suite directly via Node.js:

    node todo.test.js

---

## Execution Screenshot

![Test Suite Output](screenshots/test-suite.png)

---

## Challenges & Lessons Learned

- **ID Sequence Sync**: Managed auto-incrementing ID collisions after importing external JSON datasets by recalculating the next sequence using `reduce`.
- **Validation**: Enforced input hygiene using `.trim()` and type validation to prevent empty tasks.
- **Modularity**: Structured code into clean exported functions to enable automated runner scripts without side effects.