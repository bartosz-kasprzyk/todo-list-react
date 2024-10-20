import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { ButtonSection } from "./styled";
import {
    selectHideDone,
    selectAreTasksEmpty,
    selectAreAllTasksDone,
    toggleHideDone,
    setAllDone,
} from "../../tasksSlice"
import { Button } from "../../Button";


const Buttons = () => {
    const hideDone = useAppSelector(selectHideDone);
    const emptyTasks = useAppSelector(selectAreTasksEmpty);
    const allTasksDone = useAppSelector(selectAreAllTasksDone);
    const dispatch = useAppDispatch();
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