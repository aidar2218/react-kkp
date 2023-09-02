import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    callback: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering");
    return (
        <div>
            <AccordionTitle cb={props.callback}
                            title={props.title}/>
            { !props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    cb: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 onClick={props.cb}>---{props.title}---</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}