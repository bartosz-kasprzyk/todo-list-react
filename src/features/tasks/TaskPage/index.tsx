import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useAppSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania"}
                body={
                    !!task && (
                        <>
                            <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                        </>
                    )}
            />
        </Container>
    );
};

export default TaskPage;
