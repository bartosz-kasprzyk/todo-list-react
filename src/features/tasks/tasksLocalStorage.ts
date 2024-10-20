import { Task } from "./types";

const localStorageKey = "tasks";

export const saveTasksInLocalStorage = (tasks: Task[]) =>
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = (): Task[] => {
    const tasksFromStorage = localStorage.getItem(localStorageKey);
    return tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
}