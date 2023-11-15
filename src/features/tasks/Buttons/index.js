import { useSelector, useDispatch } from "react-redux";
import { ButtonSection, Button } from "./styled";
import { selectTasksState, selectAllTasksDone, toggleHideDone, setAllDone } from "../tasksSlice"

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const allTasksDone = useSelector(selectAllTasksDone)
    const dispatch = useDispatch();
    return (
        <ButtonSection>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>

                    <Button
                        disabled={allTasksDone}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </ButtonSection>
    )
};

export default Buttons;