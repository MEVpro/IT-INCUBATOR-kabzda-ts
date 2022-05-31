function Accordion(props: any) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    );
}

function AccordionBody() {
    return (
        <p>Used to play music</p>
    );
}

function AccordionTitle(props: any) {
    return <h3>{props.title}</h3>
    //return <h3>"Губная гармошка"</h3>
}

export default Accordion;
