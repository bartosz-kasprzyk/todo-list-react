import { useState, useRef } from "react";
import { FormSection, NewTask, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskTrimmed = newTaskContent.trim();
        if (newTaskTrimmed === "") {
            return;
        }
        addNewTask(newTaskTrimmed);
        setNewTaskContent("");
    }

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <FormSection onSubmit={onFormSubmit}>
            <NewTask
                value={newTaskContent}
                name="task"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            />
            <Button onClick={focusInput}>Dodaj zadanie</Button>
        </FormSection>
    );
};

export default Form;