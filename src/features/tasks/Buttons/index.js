import { ButtonSection, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <ButtonSection>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>

                <Button
                    disabled={tasks.every(({ done }) => done)}
                    onClick={setAllDone}
                >
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </ButtonSection>
);

export default Buttons;