import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {RatingStarType} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingStarType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState(false);
    const [on, setOn] = useState(true);


    console.log("App rendering");
    return (
        <div className="App">


            <Rating value={ratingValue} callback={setRatingValue} />
            <Accordion title={"MENU"} collapsed={accordionCollapsed} callback={() => setAccordionCollapsed(!accordionCollapsed)} />
            <OnOff state={on} setState={setOn}/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering");
    return <h1>{props.title}</h1>
}


export default App;
