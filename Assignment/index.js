//Assignment 2

//Add New Task

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, 'tasks.txt');

function addTask(task) {
    fs.appendFile(filePath, task + '\n', (err) => {
        if (err) throw err;
        console.log('Task added successfully!');
    });
}


//View task

function viewTasks() {
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      console.log('Tasks:\n', data);
  });
}


//Mark task as completed

function markTaskComplete(taskNumber) {
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      const tasks = data.split('\n');
      if (taskNumber >= tasks.length || taskNumber < 0) {
          console.log('Invalid task number.');
          return;
      }
      tasks[taskNumber] = tasks[taskNumber] + ' (completed)';
      fs.writeFile(filePath, tasks.join('\n'), (err) => {
          if (err) throw err;
          console.log('Task marked as complete.');
      });
  });
}


//Remove the task

function removeTask(taskNumber) {
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      const tasks = data.split('\n');
      if (taskNumber >= tasks.length || taskNumber < 0) {
          console.log('Invalid task number.');
          return;
      }
      tasks.splice(taskNumber, 1);
      fs.writeFile(filePath, tasks.join('\n'), (err) => {
          if (err) throw err;
          console.log('Task removed.');
      });
  });
}


//Running the function using readline

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a command (add/view/complete/remove): ', (command) => {
  if (command === 'add') {
      rl.question('Enter the task: ', (task) => {
          addTask(task);
          rl.close();
      });
  } else if (command === 'view') {
      viewTasks();
      rl.close();
  } else if (command === 'complete') {
      rl.question('Enter the task number to complete: ', (num) => {
          markTaskComplete(parseInt(num));
          rl.close();
      });
  } else if (command === 'remove') {
      rl.question('Enter the task number to remove: ', (num) => {
          removeTask(parseInt(num));
          rl.close();
      });
  } else {
      console.log('Invalid command.');
      rl.close();
  }
});
