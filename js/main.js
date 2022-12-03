new Vue({
  el: "#app",
  data: {
    newTask: "",
    priority: "1",
    orderBy: "recent",
    tasks: [
      {
        id: 1,
        label: "Go for a run",
        priority: 1,
      },
      {
        id: 2,
        label: "Get groceries",
        priority: 5,
      },
    ],
  },
  computed: {
    orderedTasks() {
      let tasksCopy = [...this.tasks];
      return this.orderBy === "recent"
        ? tasksCopy.reverse()
        : tasksCopy.sort((a, b) => a.priority - b.priority).reverse();
    },
  },
  methods: {
    addTask: function (event) {
      let id =
        this.tasks.length === 0 ? 1 : this.tasks[this.tasks.length - 1].id + 1;
      event.preventDefault();
      this.tasks.push({
        id,
        label: this.newTask,
        priority: Number(this.priority),
      });
      this.newTask = "";
      this.priority = "1";
    },
    deleteTask: function (id) {
      let taskToDeleteIndex = this.tasks.findIndex((task) => task.id === id);
      this.tasks.splice(taskToDeleteIndex, 1);
    },
  },
});
