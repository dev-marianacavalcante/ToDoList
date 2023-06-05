import { Task } from "../../shared/domain/types/Task.type";
import { Checkbox, ContainerList, ContentP, IconRemove } from "./styles";

interface ListProps {
    task: Task;
    deleteTask: (task: Task) => void;
    changeTaskChecked: (task: Task) => void;
}

export function List({task, deleteTask, changeTaskChecked}: ListProps) {
    return (
        <ContainerList>
            <Checkbox 
                checked={task.checked}
                onClick={() => changeTaskChecked(task)}
                />
            <ContentP checked={task.checked}>
                {task.title}
            </ContentP>
            <IconRemove onClick={() => deleteTask(task)}/>
        </ContainerList>
    )
}