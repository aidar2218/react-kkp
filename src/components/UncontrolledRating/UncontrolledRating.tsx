import React, {useState} from "react";

type UncontrolledRatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
    defaultValue: RatingStarType
    onChange?: (value: RatingStarType) => void
}

export type RatingStarType = 0 | 1 | 2 | 3 | 4 | 5

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    console.log("UncontrolledRating rendering");

    let [value, setValue] = useState<RatingStarType>(props.defaultValue ? props.defaultValue : 0);



    return (
        <div>
            <Star selected={value > 0} setValue={() => setValue(1)} value={1}/>
            <Star selected={value > 1} setValue={() => setValue(2)} value={2}/>
            <Star selected={value > 2} setValue={() => setValue(3)} value={3}/>
            <Star selected={value > 3} setValue={() => setValue(4)} value={4}/>
            <Star selected={value > 4} setValue={() => setValue(5)} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingStarType
    setValue: (v: RatingStarType) => void

}

function Star(props: StarPropsType) {
    console.log("Star rendering");

    return (
        <span onClick={() => props.setValue(props.value)}>
            {props.selected ? <b>star </b> : "star "}
        </span>
    )

}