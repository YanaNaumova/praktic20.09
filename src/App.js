import "./App.css";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Container,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from "@mui/material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  function handleClick(e) {
    setTask(e.target.value);
  }
  function addTask(e) {
    e.preventDefault();
    const newTask = {
      taskName: task,
      id: Math.floor(Math.random() * 10000),
      isChecked: false,
    };
    setTaskList([...taskList, newTask]);
    setTask("");
    //     Создайте функцию для добавления новой задачи. Проверьте,
    //     что поле ввода не пустое, добавьте задачу и
    // очистите поле ввода.
  }
  function checked(isChecked) {
    return !isChecked;
    //     Создайте функцию для переключения состояния задачи.
    //      Изменяйте состояние выполнения задачи при
    // нажатии.
  }
  function deleteTask(id) {
    const newtaskList = taskList.filter((item) => {
      return item.id !== id;
    });
    setTaskList(newtaskList);
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" gutterBottom>
            To-Do List
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="h5" gutterBottom>
              Add a new Task
            </Typography>
            <form onSubmit={addTask}>
              <TextField
                variant="outlined"
                color="primary"
                fullWidth
                onChange={(e) => {
                  handleClick(e);
                }}
                value={task}
                margin="normal"
                placeholder="Enter a task"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Add task
              </Button>
            </form>
          </Paper>
        </Box>
        <Box mt={2}>
          <List>
            {taskList &&
              taskList.map((taskItem) => {
                return (
                  <ListItem key={taskItem.id}>
                    <Checkbox
                      {...label}
                      edge="start"
                      onChange={() => checked(taskItem.isChecked)}
                    />
                    <ListItemText primary={taskItem.taskName} />
                    <Button
                      onClick={() => deleteTask(taskItem.id)}
                      variant="contained"
                    >
                      Delete
                    </Button>
                  </ListItem>
                );
              })}
          </List>
        </Box>
      </Container>
    </div>
  );
}

export default App;
