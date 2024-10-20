import { takeEvery, takeLatest, call, put, select, delay } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, fetchExampleTasksSuccess, fetchExampleTasksError } from "./tasksSlice"
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { Task } from "./types";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks: Task[] = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Ups, coś poszło nie tak");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks: Task[] = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}