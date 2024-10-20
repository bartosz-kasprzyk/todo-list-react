import axios from "axios";

export const getExampleTasks = async (): Promise<string[]> => {
    const response = await axios.get<string[]>("/todo-list-react/exampleTasks.json");
    return response.data;
};