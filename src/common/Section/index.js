import { Segment, Header, Title, Body } from "./styled"

const Section = ({ title, body, extraContent }) => (
    <Segment>
        <Header>
            <Title>{title}</Title>
            {extraContent}
        </Header>
        <Body>
            {body}
        </Body>
    </Segment>
);

export default Section;