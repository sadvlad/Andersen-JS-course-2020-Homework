const head = document.createElement('p');
head.textContent = 'ToDo list by SadVlad';
head.id = 'header'
document.body.appendChild(head);

const imageVlad = document.createElement('img');
imageVlad.src = 'icons/vlad.jpg'
imageVlad.id = 'vlad'
document.body.appendChild(imageVlad); 
 
const showDate = document.createElement('p');
showDate.textContent = `${getDate()}`;
showDate.id = 'date'
document.body.appendChild(showDate);

const container = document.createElement('div');
container.textContent = '';
container.id = 'container'
document.body.appendChild(container);

const tasksHeader = document.createElement('h1');
tasksHeader.textContent = 'ADD TASKS';
container.prepend(tasksHeader);

const inputTask = document.createElement('input');
inputTask.type = 'text'
inputTask.id = 'newTask'
container.appendChild(inputTask);
 
const addButton = document.createElement('button');
addButton.textContent = 'ADD';
addButton.id = 'add'
container.appendChild(addButton);

const tasksListUnfinished = document.createElement('h1');
tasksListUnfinished.textContent = 'TASKS LIST';
container.append(tasksListUnfinished);

const unfinishedTasks = document.createElement('ul');
unfinishedTasks.id = 'unfinishedTasks'
container.appendChild(unfinishedTasks);

const tasksListFinished = document.createElement('h1');
tasksListFinished.textContent = 'COMPLETE TASKS';
container.appendChild(tasksListFinished);

const finishedTasks = document.createElement('ul');
finishedTasks.id = 'finishedTasks'
container.appendChild(finishedTasks);

function getDate() {
  const date = new Date;
  let day = date.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }  
  const year = date.getFullYear();
  return `Date: ${day}.${month}.${year}`
}

function createNewElement(task, isDone) {
  const listItem = document.createElement('li');
  const checkbox = document.createElement('button');

  if(isDone){
    checkbox.className = 'checkbox';
    checkbox.innerHTML = 'done';
  } else {
    checkbox.className = 'checkbox';
    checkbox.innerHTML = 'wait';
  }
  const label = document.createElement('label');
  label.innerText = task;
  const input = document.createElement('input');
  input.type = 'text';
  const editButton = document.createElement('button');
  editButton.className = 'edit';
  editButton.innerHTML = 'edit';
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete';
  deleteButton.innerHTML = 'delete';
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(input);
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);
  return listItem;
}

function addTask() {
  if (inputTask.value) {
    const listItem = createNewElement(inputTask.value, false);
    unfinishedTasks.appendChild(listItem);
    bindTaskEvents(listItem, finishTask)
    inputTask.value = '';
  }
  save();
}

addButton.addEventListener('click', addTask);

function deleteTask() {
  const listItem = this.parentNode;
  const ul = listItem.parentNode;
  ul.removeChild(listItem);
  save();
}

function editTask() {
  const editButton = this;
  const listItem = this.parentNode;
  const label = listItem.querySelector('label');
  const input = listItem.querySelector('input[type=text]');
  const isEdit = listItem.classList.contains('editMode');

  if (isEdit) {
    label.innerText = input.value;
    editButton.className = 'edit';
    editButton.innerHTML = 'edit';
    save();
  } else {
    input.value = label.innerText;
    editButton.className = 'save';
    editButton.innerHTML = 'save';
  }
  listItem.classList.toggle('editMode');
}

function finishTask() {
  const listItem = this.parentNode;
  const checkbox = listItem.querySelector('button.checkbox');
  checkbox.className = 'checkbox';
  checkbox.innerHTML = 'done';
  finishedTasks.appendChild(listItem);
  bindTaskEvents(listItem, unfinishTask);
  save();
}

function unfinishTask() {
  const listItem = this.parentNode;
  const checkbox = listItem.querySelector('button.checkbox');
  checkbox.className = 'checkbox';
  checkbox.innerHTML = 'wait';
  unfinishedTasks.appendChild(listItem);
  bindTaskEvents(listItem, finishTask)
  save();
}

function bindTaskEvents(listItem, checkboxEvent) {
  const checkbox = listItem.querySelector('button.checkbox');
  const editButton = listItem.querySelector('button.edit');
  const deleteButton = listItem.querySelector('button.delete');

  checkbox.onclick = checkboxEvent;
  editButton.addEventListener('click', editTask);
  deleteButton.addEventListener('click', deleteTask);
}

function save() {
  const unfinishedTasksArr = [];
  for (let i = 0; i < unfinishedTasks.children.length; i++) {
    unfinishedTasksArr.push(unfinishedTasks.children[i].getElementsByTagName('label')[0].innerText);
  }

  const finishedTasksArr = [];
  for (let i = 0; i < finishedTasks.children.length; i++) {
    finishedTasksArr.push(finishedTasks.children[i].getElementsByTagName('label')[0].innerText);
  }

  localStorage.removeItem('todo');
  localStorage.setItem('todo', JSON.stringify({
    unfinishedTasks: unfinishedTasksArr,
    finishedTasks: finishedTasksArr
  }));
}

function load(){
  return JSON.parse(localStorage.getItem('todo'));
}

const data = load();

for(let i = 0; i < data.unfinishedTasks.length;i++){
  const listItem = createNewElement(data.unfinishedTasks[i], false);
  unfinishedTasks.appendChild(listItem);
  bindTaskEvents(listItem, finishTask);
}

for(let i = 0; i < data.finishedTasks.length; i++){
  const listItem = createNewElement(data.finishedTasks[i], true);
  finishedTasks.appendChild(listItem);
  bindTaskEvents(listItem, unfinishTask);
}
