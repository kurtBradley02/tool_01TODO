document
  .getElementById("file-input")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = function (e) {
        const todoItems = e.target.result.split("\n");
        const todoTable = document.getElementById("todo-items");
        todoTable.innerHTML = ""; // Clear existing content

        todoItems.forEach((item) => {
          const [description, priority, status] = item.split(",");
          if (description && priority && status) {
            const row = `<tr><td>${description.trim()}</td><td>${priority.trim()}</td><td>${status.trim()}</td></tr>`;
            todoTable.innerHTML += row;
          }
        });
      };
      reader.readAsText(file);
    } else {
      alert("Please select a .txt file.");
    }
  });

document
  .getElementById("file-input2")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = function (e) {
        const todoItems = e.target.result.split("\n");
        const todoTable = document.getElementById("todo-items");
        todoTable.innerHTML = ""; // Clear existing content

        todoItems.forEach((item) => {
          const [description, priority, status] = item.split(",");
          if (description && priority && status) {
            if (
              status.trim().toLowerCase() === "not started" ||
              status.trim().toLowerCase() === "completed"
            ) {
              const row = `<tr>
                             <td>${description.trim()}</td>
                             <td>${priority.trim()}</td>
                             <td>${status.trim()}</td>
                           </tr>`;
              todoTable.innerHTML += row;
            }
          }
        });
      };
      reader.readAsText(file);
    } else {
      alert("Please select a .txt file.");
    }
  });

document
  .getElementById("file-input3")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = function (e) {
        const todoItems = e.target.result.split("\n");
        const todoTable = document.getElementById("todo-items");
        todoTable.innerHTML = ""; // Clear existing content

        todoItems.forEach((item) => {
          const [description, priority, status] = item.split(",");
          if (description && priority && status) {
            if (
              status.trim().toLowerCase() === "in progress" ||
              status.trim().toLowerCase() === "completed"
            ) {
              const row = `<tr>
                             <td>${description.trim()}</td>
                             <td>${priority.trim()}</td>
                             <td>${status.trim()}</td>
                           </tr>`;
              todoTable.innerHTML += row;
            }
          }
        });
      };
      reader.readAsText(file);
    } else {
      alert("Please select a .txt file.");
    }
  });

document
  .getElementById("file-input4")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = function (e) {
        const todoItems = e.target.result.split("\n");
        const todoTable = document.getElementById("todo-items");
        todoTable.innerHTML = ""; // Clear existing content

        todoItems.forEach((item) => {
          const [description, priority, status] = item.split(",");
          if (description && priority && status) {
            if (
              status.trim().toLowerCase() === "done" ||
              status.trim().toLowerCase() === "completed"
            ) {
              const row = `<tr>
                             <td>${description.trim()}</td>
                             <td>${priority.trim()}</td>
                             <td>${status.trim()}</td>
                           </tr>`;
              todoTable.innerHTML += row;
            }
          }
        });
      };
      reader.readAsText(file);
    } else {
      alert("Please select a .txt file.");
    }
  });
