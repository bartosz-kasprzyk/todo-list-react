import { Segment, Header, Title } from "./styled"

const Section = ({ title, body, extraContent }) => (
    <Segment>
        <Header>
            <Title>{title}</Title>
            {extraContent}
        </Header>
        {body}
    </Segment>
);

export default Section;