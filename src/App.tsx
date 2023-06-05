import { useState } from "react"
import { ThemeProvider } from "styled-components"

import { ToDo } from "./components/ToDo"
import { Header } from "./components/Header"
import { AddNewTask } from "./components/AddNewTask"
import { defaultTheme } from "./styles/themes/default"
import { ContainerGlobal, ContentTask, GlobalStyle } from './styles/global'
import { Task } from "./shared/domain/types/Task.type"

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function deleteTask(task: Task) {
    const newArray: Task[] = tasks.filter((t) => {
      if (t.id != task.id) {
        return t;
      }
    });

    return setTasks(newArray);
  }

  function addNewTask(text: string) {
    const idRandom = Math.floor(Math.random() * 99999999);

    setTasks([
      ...tasks,
      {
        id: idRandom,
        title: text,
        checked: false,
      }
    ])
  }

  function changeTaskChecked(task:Task) {
    const newArray: Task[] = tasks.map((t) => {
      if (t.id == task.id) {
        return {
          ...t,
          checked: !t.checked,
        };
      } else {
        return t;
      }
    });

    return setTasks(newArray);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <ContainerGlobal>
        <Header/>
        <ContentTask>
          <AddNewTask
            handleAddNewTask={addNewTask}
          />
          <ToDo
            tasks={tasks}
            deleteTask={deleteTask}
            changeTaskChecked={changeTaskChecked}
            
          />
        </ContentTask>
        <GlobalStyle/>
      </ContainerGlobal>
    </ThemeProvider>
  )
}

export default App
