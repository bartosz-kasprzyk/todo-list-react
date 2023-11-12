import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormSection, NewTask, Button } from "./styled";
import { addTask } from "../tasksSlice";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef();

    const dispatch = useDispatch();

    const focusInput = () => {
        inputRef.current.focus();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskTrimmed = newTaskContent.trim();

        if (newTaskTrimmed === "") {
            return;
        }

        dispatch(addTask({
            content: newTaskTrimmed,
            done: false,
            id: nanoid(),
        }))

        setNewTaskContent("");
        focusInput();
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
            <Button>Dodaj zadanie</Button>
        </FormSection>
    );
};

export default Form;