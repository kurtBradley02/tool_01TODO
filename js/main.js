class TodoListManager {
  constructor() {
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    this.bindEventListener("file-input", this.handleFileInput);
    this.bindEventListener("file-input2", this.handleFileInput2);
    this.bindEventListener("file-input3", this.handleFileInput3);
    this.bindEventListener("file-input4", this.handleFileInput4);
  }

  bindEventListener(elementId, handler) {
    const element = document.getElementById(elementId);
    if (element) {
      element.addEventListener("change", (event) => handler.call(this, event));
    }
  }

  handleFileInput(event) {
    this.processFile(event, (status) => true);
  }

  handleFileInput2(event) {
    this.processFile(event, (status) =>
      ["not started", "completed"].includes(status.trim().toLowerCase())
    );
  }

  handleFileInput3(event) {
    this.processFile(event, (status) =>
      ["in progress", "completed"].includes(status.trim().toLowerCase())
    );
  }

  handleFileInput4(event) {
    this.processFile(event, (status) =>
      ["done", "completed"].includes(status.trim().toLowerCase())
    );
  }

  processFile(event, statusFilter) {
    const file = event.target.files[0];
    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const todoItems = e.target.result.split("\n");
        const todoTable = document.getElementById("todo-items");
        if (todoTable) {
          todoTable.innerHTML = ""; // Clear existing content
          todoItems.forEach((item) => {
            const [description, priority, status] = item.split(",");
            if (description && priority && status && statusFilter(status)) {
              const row = `<tr><td>${description.trim()}</td><td>${priority.trim()}</td><td>${status.trim()}</td></tr>`;
              todoTable.innerHTML += row;
            }
          });
        }
      };
      reader.readAsText(file);
    } else {
      alert("Please select a .txt file.");
    }
  }
}

// Initialize the TodoListManager
const todoListManager = new TodoListManager();
