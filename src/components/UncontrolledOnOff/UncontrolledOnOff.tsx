import React, {useState} from "react";

export type OnOffPropsType = {
    // on: boolean
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {

    console.log("UncontrolledOnOff rendering")

    let [on, setOn] = useState(false);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    };

    return (
        <div className={"onOffComponent"}>
            <div style={onStyle}
                 onClick={() => setOn(true)}>
                ON
            </div>
            <div style={offStyle}
                 onClick={() => setOn(false)}>
                OFF
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}