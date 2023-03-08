const addForm = document.getElementById('addForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const tasks = [];

addForm.addEventListener('submit', e => {
	e.preventDefault();
	const task = taskInput.value.trim();
	if (task !== '') {
		tasks.push(task);
		renderList();
		taskInput.value = '';
	}
});

function renderList() {
	taskList.innerHTML = '';
	tasks.forEach((task, index) => {
		const li = document.createElement('li');
		li.textContent = task;
		if (index % 2 === 0) {
			li.style.backgroundColor = '#f2f2f2';
		}
    })
}
