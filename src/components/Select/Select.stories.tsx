// Button.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';
import {action} from "@storybook/addon-actions";

import { Select } from './Select';
import React, {useState} from "react";

const meta: Meta<typeof Select> = {
    component: Select,
};

export default meta;

export type ItemType = {
    name: string
    id: number
}

const selectArray: ItemType[] = [
    {name: "Aidar", id: 1},
    {name: "Azim", id: 2},
    {name: "Baizak", id: 3},
]

export const FirstSelect = () => {
    return (
        <Select />
    )
}
