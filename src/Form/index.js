import { useState, useRef } from "react";
import "./style.css";

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
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__newTask"
                name="task"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            />
            < button className="form__button" onClick={focusInput}>Dodaj zadanie</button>
        </form>
    );
};

export default Form;