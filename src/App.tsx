import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {

    console.log("App rendering");
    return (
        <div className="App">
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My favorite songs"}/>*/}
            {/*Article 1*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<UncontrolledAccordion title={"Menu"} collapsed={false}/>*/}
            {/*<UncontrolledAccordion title={"Users"} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<UncontrolledRating value={0}/>*/}
            {/*<UncontrolledRating value={1}/>*/}
            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<UncontrolledRating value={5}/>*/}

            <OnOff />
            <UncontrolledAccordion title={"Menu"}/>
            <UncontrolledAccordion title={"Users"}/>
            <UncontrolledRating />
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
