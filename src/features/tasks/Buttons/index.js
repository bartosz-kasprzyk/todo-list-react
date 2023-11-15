import { useSelector, useDispatch } from "react-redux";
import { ButtonSection, Button } from "./styled";
import { selectHideDone, selectIsTaskEmpty, selectAreAllTasksDone, toggleHideDone, setAllDone } from "../tasksSlice"

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const emptyTask = useSelector(selectIsTaskEmpty);
    const allTasksDone = useSelector(selectAreAllTasksDone);
    const dispatch = useDispatch();
    return (
        <ButtonSection>
            {!emptyTask && (
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