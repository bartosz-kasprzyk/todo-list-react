import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskTrimmed = newTaskContent.trim();
        if (newTaskTrimmed === "") {
            return;
        }
        addNewTask(newTaskTrimmed);
        setNewTaskContent("");
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__newTask"
                name="task"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            < button className="form__button">Dodaj zadanie</button>
        </form>
    );
};

export default Form;