import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice"
import { Button } from "../../Button";

const ExampleTasksButton = () => {
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();
    return (
        <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {
                loading === true
                    ? "Ładowanie..."
                    : "Pobierz przykładowe zadania"
            }
        </Button>
    )
};

export default ExampleTasksButton;