// Button.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';
import {action} from "@storybook/addon-actions";

import {OnOff} from './OnOff';
import React, {useState} from "react";

const meta: Meta<typeof OnOff> = {
    component: OnOff,
};

export default meta;

export const OnMode = () => <OnOff state={true} setState={action("on or off was clicking")} />
export const OffMode = () => <OnOff state={false} setState={action("on or off was clicking")} />

export const ModeChanging = () => {
    const [state, setState] = useState(true);
    return (
        <OnOff state={state} setState={setState}/>
    )
}