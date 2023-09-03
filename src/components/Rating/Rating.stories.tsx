// Button.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react';
import {action} from "@storybook/addon-actions";

import {Rating} from './Rating';
import React, {useState} from "react";
import {RatingStarType} from "../UncontrolledRating/UncontrolledRating";

const meta: Meta<typeof Rating> = {
    component: Rating,
};

export default meta;



export const EmptyStar = () => {
    return (
        <Rating value={0} callback={x => x} />
    )
}

export const Rating1 = () => <Rating value={1} callback={x => x} />
export const Rating2 = () => <Rating value={2} callback={x => x} />
export const Rating3 = () => <Rating value={3} callback={x => x} />
export const Rating4 = () => <Rating value={4} callback={x => x} />
export const Rating5 = () => <Rating value={5} callback={x => x} />

export const RatingChanging = () => {

    const [rating, setRating] = useState<RatingStarType>(0);

    return <Rating value={rating} callback={setRating}/>
}