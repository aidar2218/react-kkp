import React, {useState} from 'react';

type OnOffPropsType = {
    state: boolean
    setState: (v: boolean) => void
}



export const OnOff = (props: OnOffPropsType) => {
    console.log("OnOff rendering")

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.state ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.state ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.state ? "green" : "red"
    };

    return (
        <div className={"onOffComponent"}>
            <div style={onStyle}
                 onClick={() => props.setState(true)}>
                ON
            </div>
            <div style={offStyle}
                 onClick={() => props.setState(false)}>
                OFF
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
};

