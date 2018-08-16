document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `
      <h1>Todo List</h1>
      <input type='text' placeholder='what do you need to do?' >
      <ul></ul>
      <button id='add_todo'>Add Todo</button>
    `;
   
    const todoBtn = document.getElementById('add_todo');
    const inputBox = document.getElementsByTagName('input')[0];
    const listUl = document.getElementsByTagName('ul')[0];
   
    const makeEditableFor = (taskLi, txtArea) => {
      const oldTask = txtArea.textContent;
      const editInput = taskLi.querySelector('input');
   
      txtArea.innerHTML = `<input value="${oldTask}">`;
   
      editInput.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter') {
          taskLi.innerHTML = `
              <span>${editInput.value}</span> <button>Edit</button> <button>X</button>
              `;
        }
      });
    };
   
    const createTask = (txt) => {
      const newTaskLi = document.createElement('li');
      newTaskLi.innerHTML = `<span>${txt}</span> <button>Edit</button> <button>X</button>`;
   
      newTaskLi.addEventListener('click', (ev) => {
        const task = ev.currentTarget.querySelector('span');
   
        if (ev.target.textContent === 'Edit') {
          makeEditableFor(newTaskLi, task);
        } else if (ev.target.textContent === 'X') {
          taskEl.classList.toggle('completed');
        }
      });
   
      return newTaskLi;
    };
   
    const addTask = (ev) => {
      // make sure this click works!
      // get the value of the input box
      const taskText = inputBox.value;
      const isClicked = ev.type === 'click';
      const isEnterPressed = ev.key === 'Enter';
      const isNotEmptyTask = taskText !== '';
      const shouldAddTask = (isClicked || isEnterPressed) && isNotEmptyTask;
   
      if (shouldAddTask) {
        // create an li for it
        // add the li to the ul
        listUl.appendChild(createTask(taskText));
   
        // clear out input box
        inputBox.value = '';
      }
    };
    todoBtn.addEventListener('click', addTask);
    document.addEventListener('keydown', addTask);
});
   