import { useState } from "react";
import { ButtonTask, ContainerTask, InputTask, PlusIcon } from "./styles";

interface AddNewTaskProps {
    handleAddNewTask: (inputText: string) => void
}

export function AddNewTask({handleAddNewTask}: AddNewTaskProps) {
    const [inputText, setInputText] = useState<string>();
    
    function addNewTask() {
        if (inputText == '') {
            return window.alert('Deu ruim');
        }

        handleAddNewTask(inputText as string);
        setInputText('');
    };
   
    return (
        <ContainerTask>
            <InputTask 
                placeholder="Adicione uma nova tarefa"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
            />

            <ButtonTask onClick={addNewTask}>
                Criar <PlusIcon/>
            </ButtonTask>
        </ContainerTask>
    )
}