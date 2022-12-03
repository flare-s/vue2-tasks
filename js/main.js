new Vue({
  el: "#app",
  data: {
    newTask: "",
    priority: "1",
    tasks: [
      {
        label: "Go for a run",
        priority: 1,
      },
      {
        label: "Get groceries",
        priority: 5,
      },
    ],
  },
  methods: {
    addTask: function (event) {
      event.preventDefault();
      this.tasks.push({
        label: this.newTask,
        priority: Number(this.priority),
      });
      this.newTask = "";
      this.priority = "1";
    },
  },
});
