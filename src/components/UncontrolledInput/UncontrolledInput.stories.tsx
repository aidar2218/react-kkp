// Button.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';
import {action} from "@storybook/addon-actions";

import {UncontrolledInput} from './UncontrolledInput';
import React, {ChangeEvent, useRef, useState} from "react";

const meta: Meta<typeof UncontrolledInput> = {
    component: UncontrolledInput,
};

export default meta;


export const TrackValueOfUncontrolledInputTemp = () => {
    const [value, setValue] = useState("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <input value={value} onChange={onChangeHandler}/> - {value}
        </div>
    );
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return (
        <div>
            <input ref={inputRef} id={"inputID"}/> <button onClick={save}>save</button> - actual value: {value}
        </div>

    )
}