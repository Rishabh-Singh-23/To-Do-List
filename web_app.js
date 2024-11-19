document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("add-task-button");
    const newTaskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", addTask);
    newTaskInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(li);
        });

        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        newTaskInput.value = "";
    }
});
