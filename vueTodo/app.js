const v4 = uuidv4

new Vue({
    el: '#root',
    data: {
        inputField: '',
        tasks: []
    },
    methods: {
        createTask() {
            if (this.inputField.trim().length) {
                let newTask = {}
                newTask.title = this.inputField
                newTask.id = v4()
                this.inputField = ''
                this.tasks.push(newTask)
                this.saveTasks()
            }
        },
        removeTask(id) {
            this.tasks = this.tasks.filter(c => c.id != id)
            this.saveTasks()
        },
        saveTasks(){
            const parsed = JSON.stringify(this.tasks)
            localStorage.setItem('tasks', parsed)
        },
        clearList(){
            this.tasks = []
            this.saveTasks()
        }
    },
    mounted() {
        if (localStorage.getItem('tasks')) {
            try {
                this.tasks = JSON.parse(localStorage.getItem('tasks'));
            } catch (e) {
                localStorage.removeItem('tasks');
            }
        }
    },
})