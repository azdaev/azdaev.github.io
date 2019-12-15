const input = document.querySelector('input');
let container = document.querySelector('#toDoItems');
let counter = document.querySelector('#amount');
const clearButton = document.querySelector('.clear');

if (localStorage.n == null) {
    localStorage.setItem('n', '0');
};

renderUncompleted();

//RENDER ALL TASKS
function renderUncompleted() {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
    for (let i = 0; i <= 100; i++) {
        if (localStorage[i] !== undefined) {
            let newTask = document.createElement('div');
            newTask.classList.add("toDoItem");
            newTask.id = i;
            newTask.innerHTML = "<p>"  + localStorage[i]  + "</p>";
            container.appendChild(newTask);
            newTask.firstChild.id = i;
        }
    }
    counter.innerText = "Count: " + container.childElementCount;
}

//CREATE NEW TASK
document.addEventListener('keydown', (e) => {
    if (e.keyCode === 13 && input.value) {
        localStorage.setItem(localStorage.n.toString(), input.value);
        input.value = '';
        localStorage.setItem('n', parseInt(localStorage.n) + 1);
        renderUncompleted();
    }
});

//REMOVE ALL TSAKS
clearButton.addEventListener('click', () => {
    localStorage.clear();
    renderUncompleted();
    localStorage.setItem('n', '0')
})

//REMOVE TASK
container.addEventListener('click', (e) => {
    let node = e.target;
    localStorage.removeItem(node.id);
    localStorage.setItem('n', parseInt(localStorage.n) - 1);
    renderUncompleted();
});