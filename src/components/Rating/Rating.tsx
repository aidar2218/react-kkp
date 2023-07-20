import React from "react";
import {RatingStarType} from "../UncontrolledRating/UncontrolledRating";

export type RatingPropsType = {
    value: RatingStarType
    callback: (value: RatingStarType) => void
}

export function Rating(props: RatingPropsType) {
    console.log("UncontrolledRating rendering");

    return (
        <div>
            <Star selected={props.value > 0} cb={props.callback} value={1}/>
            <Star selected={props.value > 1} cb={props.callback} value={2}/>
            <Star selected={props.value > 2} cb={props.callback} value={3}/>
            <Star selected={props.value > 3} cb={props.callback} value={4}/>
            <Star selected={props.value > 4} cb={props.callback} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    cb: (v: RatingStarType) => void
    value: RatingStarType
}

function Star(props: StarPropsType) {
    console.log("Star rendering");

    return (
        <span onClick={() => props.cb(props.value)}>
            {props.selected ? <b>star </b> : "star "}
        </span>
    )
}