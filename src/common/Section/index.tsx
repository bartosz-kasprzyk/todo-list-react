import { ReactNode } from "react";
import { Segment, Header, Title, Body } from "./styled"

interface SectionProps {
    title: ReactNode;
    body: ReactNode;
    extraContent?: ReactNode;
}

const Section = ({ title, body, extraContent }: SectionProps) => (
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