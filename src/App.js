import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  {id: 1, content: "test 1", done: false},
  {id: 2, content: "test 2", done: true},
];

const hideDone = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <main>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />

        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDone={hideDone} />}
          extraContent={<Buttons tasks={tasks} hideDone={hideDone}/>}
        />
      </main>
    </Container>
  );
}

export default App;
