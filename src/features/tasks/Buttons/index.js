import { useSelector, useDispatch } from "react-redux";
import { ButtonSection, Button } from "./styled";
import { selectHideDone, selectAreTasksEmpty, selectAreAllTasksDone, toggleHideDone, setAllDone } from "../tasksSlice"

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const emptyTasks = useSelector(selectAreTasksEmpty);
    const allTasksDone = useSelector(selectAreAllTasksDone);
    const dispatch = useDispatch();
    return (
        <ButtonSection>
            {!emptyTasks && (
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