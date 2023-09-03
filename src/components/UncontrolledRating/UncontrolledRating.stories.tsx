// Button.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';
import {action} from "@storybook/addon-actions";

import {UncontrolledRating} from './UncontrolledRating';
import React, {useState} from "react";
import {RatingStarType} from "../UncontrolledRating/UncontrolledRating";

const meta: Meta<typeof UncontrolledRating> = {
    component: UncontrolledRating,
};

export default meta;



export const EmptyStar = () => {
    return (
        <UncontrolledRating defaultValue={0}/>
    )
}

export const Rating1 = () => <UncontrolledRating defaultValue={1} />
export const Rating2 = () => <UncontrolledRating defaultValue={2} />
export const Rating3 = () => <UncontrolledRating defaultValue={3} />
export const Rating4 = () => <UncontrolledRating defaultValue={4} />
export const Rating5 = () => <UncontrolledRating defaultValue={5} />

export const RatingChanging = () => {

    const [rating, setRating] = useState<RatingStarType>(0);

    return <UncontrolledRating defaultValue={0}/>
}