import React from "react";
import { ItemType } from "./Accordion.stories";



type AccordionPropsType = {
    title: string
    collapsed: boolean
    callback: () => void
    items: ItemType[]
    onClick: (id: number) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering");
    return (
        <div>
            <AccordionTitle cb={props.callback}
                            title={props.title}/>
            { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (id: number) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering");
    const happyHandler = (id: string) => {
        alert("")
    }
    return (
        <ul>
            {props.items.map((item, index) => <li key={item.id} onClick={() => props.onClick(item.id)}>{item.name}</li>)}
        </ul>
    )
}