import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    < Container >
        <Header title="O autorze" />
        <Section
            title="Bartosz Kasprzyk"
            body={
                <>Magister matematyki stosowanej, absolwent szkoły muzycznej oraz przyszły front-end developer. <br />Udzielam korepetycji z matematyki, uczę się programowania, a w wolnym czasie gram w gry 🎮 </>
            }
        />
    </Container >
);
