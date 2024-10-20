import { useState, useRef, FormEventHandler } from "react";
import { useAppDispatch } from "../../../../hooks";
import { nanoid } from "@reduxjs/toolkit";
import { FormSection, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import Input from "../../Input";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();

    const focusInput = () => {
        inputRef.current!.focus();
    }

    const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
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
            <Input
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