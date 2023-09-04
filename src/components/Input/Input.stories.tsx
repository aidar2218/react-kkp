// Button.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';
import {action} from "@storybook/addon-actions";

import {Input} from './Input';
import React, {ChangeEvent, useState} from "react";
import {RatingStarType} from "../UncontrolledRating/UncontrolledRating";

const meta: Meta<typeof Input> = {
    component: Input,
};

export default meta;



export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");
    return (
        <>
            <input value={parentValue} onChange={(e) => {setParentValue(e.currentTarget.value)}}/>
        </>
    )
}

export const ControlledCheckbox = () => {
    const [value, setValue] = useState<boolean>(true);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked);
    }

    return (
        <>
            <input type="checkbox" checked={value} onChange={onChangeHandler}/>
        </>
    )
}

export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>("1")
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <>
            <select value={value} onChange={onChangeHandler}>
                <option>none</option>
                <option value={"1"}>Bishkek</option>
                <option value={"2"}>Tashkent</option>
                <option value={"3"}>Astana</option>
            </select>
            - {value}
        </>
    )
}

