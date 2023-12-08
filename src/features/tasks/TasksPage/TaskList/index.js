import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { List, Item, Content, Button, StyledLink } from "./styled";
import { selectHideDone, toggleTaskDone, removeTask, selectTaskByQuery } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTaskByQuery(state, query));
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
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
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