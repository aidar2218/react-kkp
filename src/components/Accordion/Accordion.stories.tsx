// Button.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';
import {action} from "@storybook/addon-actions";

import { Accordion } from './Accordion';
import React, {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;

export type ItemType = {
    name: string
    id: number
}

const onChangeHandler = action("on change");
const onClickCallback = action("some item was clicked")


const accordionArray: ItemType[] = [
    {name: "Aidar", id: 1},
    {name: "Azim", id: 2},
    {name: "Baizak", id: 3},
]

export const CollapsedAccordion = () => {
    return (
        <Accordion title={"Collapsed Accordion"}
                   collapsed={true}
                   callback={onChangeHandler}
                   items={[]}
                   onClick={onClickCallback}/>
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion title={"Opened Accordion"}
                   collapsed={false}
                   callback={() => {}}
                   items={accordionArray}
                   onClick={onClickCallback}/>
    )
}

export const DemoAccordion = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Accordion title={"DEMO"}
                   collapsed={collapsed}
                   callback={() => setCollapsed(!collapsed)}
                   items={accordionArray}
                   onClick={(id) => alert(`user with ID ${id} should be happy`)}/>
    )
}