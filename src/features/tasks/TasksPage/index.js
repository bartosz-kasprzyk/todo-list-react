import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Search from "./Search";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import ExampleTasksButton from "./ExampleTasksButton";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <main>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
          extraContent={<ExampleTasksButton />}
        />

        <Section
          title="Wyszukiwarka"
          body={<Search />}
        />

        <Section
          title="Lista zadań"
          body={<TaskList />}
          extraContent={<Buttons />}
        />
      </main>
    </Container>
  );
}

export default TasksPage;
