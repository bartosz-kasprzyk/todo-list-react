import { useDispatch, useSelector } from "react-redux";
import { Loading } from "./styled";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice"
import { Button } from "../../Button";

const ExampleTasksButton = () => {
    const isLoading = useSelector(selectLoading);
    const dispatch = useDispatch();
    return (
        <Button onClick={() => dispatch(fetchExampleTasks())}>
            {isLoading === true ? (
                <Loading>
                    Ładowanie...
                </Loading>
            )
                : (
                    "Pobierz przykładowe zadania")}
        </Button>
    )
};

export default ExampleTasksButton;