import React from 'react';
import './App.css';
import Technologies from './Techologies';
import Header from "./Header";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Accordion/Rating";

function App() {
    return (
        <div>
            <PageTitle title={"First title"}/>
            <PageTitle title={"Second title"}/>
            <Technologies/>
            <Header/>
            <Accordion title={"First Accordion title"}/>
            <Accordion title={"Second Accordion title"}/>
            Article 0
            <Rating value={1}/>
            Article 1
            <Rating value={1}/>
            Article 2
            <Rating value={2}/>
            Article 3
            <Rating value={3}/>
            Article 4
            <Rating value={4}/>
            Article 5
            <Rating value={5}/>
        </div>
    );
};

function PageTitle (props: any) {
        return <h1>{props.title}</h1>
}
export default App;
