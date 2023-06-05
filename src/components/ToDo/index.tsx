import Clipboard from '../../assets/Clipboard.svg';
import { Task } from '../../shared/domain/types/Task.type';
import { List } from '../List';
import { BadgeTaskComplete, BadgeTaskPending, Container, ContainerEmpty, ContainerP, Content, ContentImg, ContentP, ContentSpan} from './styles';

interface ToDoProps {
    tasks: Task[];
    deleteTask: (task: Task) => void;
    changeTaskChecked: (task: Task) => void;
}

export function ToDo({tasks, deleteTask, changeTaskChecked}: ToDoProps) {
    return (
        <Container>
            <Content> 
                <ContainerP>
                    <ContentP color='blue'>Tarefas criadas</ContentP>
                    <BadgeTaskPending pill>{tasks.length}</BadgeTaskPending>
                </ContainerP>
                <ContainerP>
                    <ContentP color='purple'>Concluidas</ContentP>
                    <BadgeTaskComplete pill>{
                        tasks.filter((task) => {
                            if (task.checked == false) {
                                return task;
                            }
                        }).length
                    } de {tasks.length}</BadgeTaskComplete>
                </ContainerP>
            </Content>

            {
                tasks.length != 0 ?
                tasks.map((task) => {
                    return <List
                        task={task} 
                        deleteTask={deleteTask}
                        changeTaskChecked={changeTaskChecked}
                    />
                }) :
                <ContainerEmpty>
                    <ContentImg src={Clipboard}/>
                    <ContentSpan><strong>Você ainda não tem tarefas cadastradas</strong></ContentSpan>
                    <ContentSpan>Crie tarefas e organize seus itens a fazer</ContentSpan>
                </ContainerEmpty>
            }
        </Container>
    )
}