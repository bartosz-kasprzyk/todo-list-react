import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";
import { Task, TasksState } from "./types";
import { RootState } from "../../store";

const initialState: TasksState = {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    loading: false,
    status: 'idle',
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, { payload: task }: PayloadAction<Task>) => {
            state.tasks.push(task);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: (state, { payload: taskId }: PayloadAction<string>) => {
            const index = state.tasks.findIndex(({ id }) => id === taskId);
            if (index !== -1) {
                state.tasks[index].done = !state.tasks[index].done;
            }
        },
        removeTask: (state, { payload: taskId }: PayloadAction<string>) => {
            const index = state.tasks.findIndex(({ id }) => id === taskId);
            if (index !== -1) {
                state.tasks.splice(index, 1);
            }
        },
        setAllDone: (state) => {
            for (const task of state.tasks) {
                task.done = true;
            }
        },
        fetchExampleTasks: (state) => {
            state.status = 'loading';
        },
        fetchExampleTasksSuccess: (state, { payload }: PayloadAction<Task[]>) => {
            state.tasks = payload;
            state.status = 'idle';
        },
        fetchExampleTasksError: (state) => {
            state.status = 'failed';
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
} = tasksSlice.actions;

const selectTasksState = (state: RootState) => state.tasks;

export const selectTasks = (state: RootState) => selectTasksState(state).tasks;
export const selectHideDone = (state: RootState) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state: RootState) => {
    const tasks = selectTasks(state);
    return tasks ? tasks.length === 0 : true; // Return true if tasks is undefined
};
export const selectAreAllTasksDone = (state: RootState) => {
    const tasks = selectTasks(state);
    return tasks ? tasks.every(({ done }) => done) : true; // Return true if tasks is undefined
};
export const selectLoading = (state: RootState) => selectTasksState(state).loading;

export const getTaskById = (state: { tasks: TasksState }, taskId: string) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTaskByQuery = (state: RootState, query: string) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
}

export default tasksSlice.reducer;