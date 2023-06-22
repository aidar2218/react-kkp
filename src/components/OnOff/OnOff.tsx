export type OnOffPropsType = {
    onOrOff: boolean
}

export const OnOff = (props: OnOffPropsType) => {

    return (
        <div className={"onOffComponent"}>
            <div>On Off toy</div>
            <button className={props.onOrOff ? "onButton" : ""}>ON</button>
            <button className={!props.onOrOff ? "offButton" : ""}>OFF</button>
        </div>
    )
}