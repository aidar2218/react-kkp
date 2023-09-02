// Button.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';
import {action} from "@storybook/addon-actions";

import { Accordion } from './Accordion';
import React, {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
    args: {
        title: "Accordion hi",
        collapsed: false,
    }
}



const onChangeHandler = action("on change");

export const CollapsedAccordion = () => {
    return (
        <Accordion title={"Collapsed Accordion"} collapsed={true} callback={onChangeHandler} />
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion title={"Opened Accordion"} collapsed={false} callback={() => {}} />
    )
}

export const DemoAccordion = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Accordion title={"DEMO"} collapsed={collapsed} callback={() => setCollapsed(!collapsed)} />
    )
}