import "./style.css"

const Section = ({ title, body, extraContent }) => (
    <section className="section">
        <div className="section__bar">
            <h2 className="section__header">{title}</h2>
            {extraContent}
        </div>
        {body}
    </section>
);

export default Section;