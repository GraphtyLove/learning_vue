const Header = new Vue({
    el: '#header',
    data: {
        username: 'Maxim'
    }
})


const main = new Vue({
    el: '#app',
    data: {
        tasks: [
            { text: 'Eat well', isDone: false },
            { text: 'Drink water', isDone: true },
            { text: 'Learn Vue', isDone: false }
        ],
        taskToAdd: ""
    },
    computed: {
        // Filter to keep active tasks
        activeTasks: function () { return this.tasks.filter(task => !task.isDone) },
        // Filter to keep the done tasks
        doneTasks: function () { return this.tasks.filter(task => task.isDone) }
    },
    methods: {
        // Change the value of isDone for the task to 
        checkTask: function (i) { this.activeTasks[i].isDone = true },
        unCheckTask: function (i) { this.doneTasks[i].isDone = false },
        addTask: function () {
            // Save the input's value
            const taskText = this.taskToAdd
            // empty the taskToAdd and so the input
            this.taskToAdd = ""
            // Add the task to the task's list
            return this.tasks.push({ text: taskText, isDone: false })
        }
    }
})


const footer = new Vue({
    el: '#footer',
    data: {
        timeDate: new Date().toLocaleString()
    }
})

