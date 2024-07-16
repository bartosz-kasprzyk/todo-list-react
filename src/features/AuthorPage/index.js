import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export const AuthorPage = () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Bartosz Kasprzyk"
            body={
                <>
                    Bartek, 25 lat. Magister matematyki 👨‍🎓, absolwent szkoły muzycznej 🎼 oraz przyszły front-end developer 👨‍💻 <br />
                    Na codzień udzielam korepetycji z matematyki, uczę się programowania, a w wolnym czasie gram w gry oraz rysuję na tablecie 🎮🎨
                </>
            }
        />
    </Container>
);
