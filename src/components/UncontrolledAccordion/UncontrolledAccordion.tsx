import React, {useReducer} from "react";
import {actionCreator, reducer} from "./reducer";

type UncontrolledAccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion rendering");

    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    const collapsedFunc = () => {
        dispatch(actionCreator());
    }

    return (
        <div>
            <AccordionTitle title={props.title} collapsed={collapsedFunc}/>
            { state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 onClick={props.collapsed}>---{props.title}---</h3>
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