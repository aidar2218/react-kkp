import React, {useState, KeyboardEvent, useEffect} from 'react';
import {ItemType} from "./Select.stories";
import s from "./Select.module.css"

export type SelectPropsType = {
    value?: string | null
    onChange: (value: string) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(true);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    const selectedItems = props.items.find(el => el.id === props.value);
    const hoveredItem = props.items.find(el => el.id === hoveredElementValue);

    const onSelectClick = () => {
        setActive(!active);
    };

    const onItemClick = (id: string) => {
        props.onChange(id);
        onSelectClick();
    };

    useEffect(() => {
        setHoveredElementValue(props.value);
    }, [props.value])

    const onKeyUpHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].id === hoveredElementValue) {
                    const pretendentElement = event.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.id);
                        return;
                    }
                }
            }
            if (!selectedItems) {
                props.onChange(props.items[0].id);
            }
        }
        if (event.key === "Enter" || event.key === "Escape") {
            setActive(false);
        }
    }



    return (
        <>
            <select>
                <option value="">Bishkek</option>
                <option value="">Astana</option>
                <option value="">Tashkent</option>
            </select>
            <div className={s.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
                <span className={s.main} onClick={onSelectClick}>{selectedItems && selectedItems.name}</span>
                {active && <div className={s.items}>
                    {props.items.map(el => <div key={el.id}
                                                onClick={() => onItemClick(el.id)}
                                                className={s.item + " " + (hoveredItem === el ? s.selected : "")}
                                                onMouseEnter={() => setHoveredElementValue(el.id)}
                    >
                        {el.name}
                    </div>)}
                </div>}
            </div>
        </>
    );
};

