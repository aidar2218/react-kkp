// Button.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';
import {action} from "@storybook/addon-actions";

import { UncontrolledOnOff } from './UncontrolledOnOff';
import React, {useState} from "react";

const meta: Meta<typeof UncontrolledOnOff> = {
    component: UncontrolledOnOff,
};

export default meta;

export const UncontrolledOnMode = () => {
    return (
        <UncontrolledOnOff defaultValue={true}/>
    )
}

export const UncontrolledOffMode = () => {
    return (
        <UncontrolledOnOff defaultValue={false}/>
    )
}