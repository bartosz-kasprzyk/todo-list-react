import { useState, useEffect } from "react";

const localStorageTasksKey = "tasks";

export const useTasks = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem(localStorageTasksKey)) || []);

    useEffect(() => {
        localStorage.setItem(localStorageTasksKey, JSON.stringify(tasks));
    }, [tasks])

    return { tasks };
};