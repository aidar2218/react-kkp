import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {

    console.log("App rendering");
    return (
        <div className="App">
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My favorite songs"}/>
            Article 1
            <Rating value={4}/>
            <Accordion title={"Menu"} collapsed={false}/>
            <Accordion title={"Users"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff onOrOff={true}/>
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
