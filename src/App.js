import React, { useState } from "react";

/*
  App component
  -------------------------
  This is the main screen of the app. It lets you:
  - See your tasks
  - Add a new task
  - Mark a task as done or not done
  - Edit a task
  - Delete a task

  Notes for non-technical readers:
  - "State" is just the app's memory while it's open. We store tasks and inputs here.
  - Each task has an "id" (a unique number), some text, and whether it's completed.
*/
export default function App() {
  // The list of tasks you see in the app
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Buy groceries for next week",
      completed: true,
    },
    {
      id: 2,
      text: "Make a new project",
      completed: false,
    },
    {
      id: 3,
      text: "Sign up for online course",
      completed: false,
    },
  ]);

  // Text typed into the "Add new task..." box
  const [newTodo, setNewTodo] = useState("");
  // Which tasks to show: All, Completed, or Active
  const [filter, setFilter] = useState("All");
  // If you are editing a task, we store its id and the temporary text here
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  // Add a new task to the list
  const addTodo = () => {
    if (newTodo.trim()) {
      const newId = Math.max(...todos.map(t => t.id), 0) + 1;
      const newTodoItem = {
        id: newId,
        text: newTodo.trim(),
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  // Mark a task as done/undone
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Remove a task from the list
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Start editing a task (show the input box with existing text)
  const startEdit = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  // Save changes made while editing a task
  const saveEdit = () => {
    if (editingText.trim()) {
      setTodos(todos.map(todo => 
        todo.id === editingId ? { ...todo, text: editingText.trim() } : todo
      ));
    }
    setEditingId(null);
    setEditingText("");
  };

  // Stop editing without saving changes
  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  // Show tasks based on the selected filter (All / Completed / Active)
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case "Completed":
        return todo.completed;
      case "Active":
        return !todo.completed;
      default:
        return true;
    }
  });

  return React.createElement("div", {
    className: "min-vh-100",
    style: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem 0'
    }
  },
    React.createElement("div", { className: "container py-5" },
      React.createElement("div", { className: "row d-flex justify-content-center align-items-center" },
        React.createElement("div", { className: "col-lg-8 col-xl-6" },
          React.createElement("div", {
            className: "card shadow-lg border-0",
            style: {
              borderRadius: "1rem",
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)"
            }
          },
            React.createElement("div", { className: "card-body py-4 px-4 px-md-5" },
              React.createElement("h1", {
                className: "h1 text-center mt-3 mb-4 pb-3",
                style: {
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold'
                }
              },
                React.createElement("i", { className: "fas fa-check-square me-2" }),
                "UR List"
              ),
              
              React.createElement("div", { className: "pb-3" },
                React.createElement("div", {
                  className: "card border-0 shadow-sm",
                  style: { background: "rgba(255, 255, 255, 0.8)" }
                },
                  React.createElement("div", { className: "card-body p-3" },
                    React.createElement("div", { className: "d-flex flex-row align-items-center gap-3" },
                      React.createElement("input", {
                        type: "text",
                        className: "form-control form-control-lg border-0 shadow-sm",
                        placeholder: "Add new task...",
                        value: newTodo,
                        onChange: (e) => setNewTodo(e.target.value),
                        onKeyPress: (e) => e.key === 'Enter' && addTodo(),
                        style: { borderRadius: "0.75rem" }
                      }),
                      React.createElement("button", {
                        className: "btn btn-primary btn-lg px-4",
                        onClick: addTodo,
                        style: {
                          borderRadius: "0.75rem",
                          background: "linear-gradient(45deg, #667eea, #764ba2)",
                          border: "none",
                          fontWeight: "600"
                        }
                      },
                        React.createElement("i", { className: "fas fa-plus me-2" }),
                        "Add"
                      )
                    )
                  )
                )
              ),
              
              React.createElement("div", {
                className: "d-flex justify-content-between align-items-center mb-4 py-3",
                style: {
                  background: "rgba(102, 126, 234, 0.1)",
                  borderRadius: "0.75rem",
                  padding: "1rem"
                }
              },
                React.createElement("div", { className: "d-flex align-items-center" },
                  React.createElement("i", { className: "fas fa-filter text-primary me-2" }),
                  React.createElement("span", { className: "fw-semibold text-dark" }, "Filter Tasks")
                ),
                React.createElement("select", {
                  className: "form-select border-0 shadow-sm",
                  value: filter,
                  onChange: (e) => setFilter(e.target.value),
                  style: {
                    width: 'auto',
                    borderRadius: "0.5rem",
                    background: "rgba(255, 255, 255, 0.9)"
                  }
                },
                  React.createElement("option", { value: "All" }, "All Tasks"),
                  React.createElement("option", { value: "Completed" }, "Completed"),
                  React.createElement("option", { value: "Active" }, "Active")
                )
              ),

              filteredTodos.map((todo) =>
                React.createElement("div", {
                  key: todo.id,
                  className: "card mb-3 border-0 shadow-sm",
                  style: {
                    background: todo.completed ? "rgba(40, 167, 69, 0.1)" : "rgba(255, 255, 255, 0.8)",
                    borderRadius: "0.75rem",
                    transition: "all 0.3s ease"
                  }
                },
                  React.createElement("div", { className: "card-body p-3" },
                    React.createElement("div", { className: "row align-items-center" },
                      React.createElement("div", { className: "col-auto" },
                        React.createElement("div", { className: "form-check" },
                          React.createElement("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            id: `flexCheck${todo.id}`,
                            checked: todo.completed,
                            onChange: () => toggleComplete(todo.id),
                            style: {
                              width: "1.25rem",
                              height: "1.25rem",
                              borderRadius: "0.25rem"
                            }
                          })
                        )
                      ),
                      React.createElement("div", { className: "col" },
                        editingId === todo.id ?
                          React.createElement("div", { className: "d-flex w-100 gap-2" },
                            React.createElement("input", {
                              type: "text",
                              className: "form-control border-0 shadow-sm",
                              value: editingText,
                              onChange: (e) => setEditingText(e.target.value),
                              onKeyPress: (e) => {
                                if (e.key === 'Enter') saveEdit();
                                if (e.key === 'Escape') cancelEdit();
                              },
                              onBlur: saveEdit,
                              autoFocus: true,
                              style: { borderRadius: "0.5rem" }
                            }),
                            React.createElement("button", {
                              className: "btn btn-success btn-sm",
                              onClick: saveEdit
                            },
                              React.createElement("i", { className: "fas fa-check" })
                            ),
                            React.createElement("button", {
                              className: "btn btn-secondary btn-sm",
                              onClick: cancelEdit
                            },
                              React.createElement("i", { className: "fas fa-times" })
                            )
                          ) :
                          React.createElement("p", {
                            className: `mb-0 fw-medium ${todo.completed ? 'text-decoration-line-through text-muted' : 'text-dark'}`
                          }, todo.text)
                      ),
                      React.createElement("div", { className: "col-auto" },
                        React.createElement("div", { className: "d-flex gap-2" },
                          React.createElement("button", {
                            className: "btn btn-outline-info btn-sm",
                            onClick: () => startEdit(todo.id, todo.text),
                            title: "Edit task"
                          },
                            React.createElement("i", { className: "fas fa-pencil-alt" })
                          ),
                          React.createElement("button", {
                            className: "btn btn-outline-danger btn-sm",
                            onClick: () => deleteTodo(todo.id),
                            title: "Delete task"
                          },
                            React.createElement("i", { className: "fas fa-trash-alt" })
                          )
                        )
                      )
                    )
                  )
                )
              ),
              
              filteredTodos.length === 0 &&
                React.createElement("div", { className: "text-center py-5" },
                  React.createElement("div", {
                    className: "card border-0 shadow-sm",
                    style: { background: "rgba(255, 255, 255, 0.8)" }
                  },
                    React.createElement("div", { className: "card-body py-4" },
                      React.createElement("i", {
                        className: "fas fa-clipboard-list text-muted mb-3",
                        style: { fontSize: "3rem" }
                      }),
                      React.createElement("h5", { className: "text-muted mb-2" }, "No tasks found"),
                      React.createElement("p", { className: "text-muted mb-0" }, "Try adjusting your filter or add a new task above!")
                    )
                  )
                )
            )
          )
        )
      )
    )
  );
}