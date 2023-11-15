import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import { selectTasks, selectHideDone, toggleTaskDone, removeTask } from "../tasksSlice";

const TaskList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    $hidden={task.done && hideDone}
                >
                    <Button
                        $toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}>
                        <i className={`${task.done ? "gg-check" : ""}`}></i>
                    </Button>
                    <Content $done={task.done}>
                        {task.content}
                    </Content>
                    <Button
                        $remove
                        onClick={() => dispatch(removeTask(task.id))}>
                        <i className="gg-trash"></i>
                    </Button>
                </Item>
            ))}
        </List >
    )
};

export default TaskList;