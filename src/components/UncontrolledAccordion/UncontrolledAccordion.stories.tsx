// Button.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';
import {action} from "@storybook/addon-actions";

import { UncontrolledAccordion } from './UncontrolledAccordion';
import React, {useState} from "react";

const meta: Meta<typeof UncontrolledAccordion> = {
    component: UncontrolledAccordion,
};

export default meta;




export const UncontrolledAccordionModeChanging = () => {
    return (
        <UncontrolledAccordion title={"Collapsed Accordion"} />
    )
}