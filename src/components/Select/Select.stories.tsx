
import type {Meta} from '@storybook/react';

import { Select } from './Select';
import React, {useState} from "react";

const meta: Meta<typeof Select> = {
    component: Select,
};

export default meta;

export type ItemType = {
    name: string
    id: string
}

const selectArray: ItemType[] = [
    {name: "Aidar", id: "1"},
    {name: "Azim", id: "2"},
    {name: "Baizak", id: "3"},
]

export const WithValue = () => {
    const [value, setValue] = useState("2");
    return (
        <Select onChange={setValue} value={value} items={selectArray}/>
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState<string | null>(null)
    return (
        <Select onChange={setValue} value={value} items={selectArray}/>
    )
}
