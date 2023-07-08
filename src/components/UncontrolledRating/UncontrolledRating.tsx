import React, {useState} from "react";

type UncontrolledRatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

type RatingStarType = 0 | 1 | 2 | 3 | 4 | 5

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    console.log("UncontrolledRating rendering");

    let [value, setValue] = useState<RatingStarType>(0);



    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
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