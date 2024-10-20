import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice"
import { Button } from "../../Button";

const ExampleTasksButton = () => {
    const loading = useAppSelector(selectLoading);
    const dispatch = useAppDispatch();
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