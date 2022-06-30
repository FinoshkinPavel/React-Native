import React, {useState} from 'react';
import './App.css';
import {RatingControl, RatingValueType} from "./Rating/RatingControl";
import {RatingUnControl} from "./Rating/RatingUnControl";
import {AccordionControl} from "./Accordion/AccordionControl";
import {AccordionUnControl} from "./Accordion/AccordionUnControl";
import {SwitcherControl} from "./Switcher/Swither Control";
import {SwitcherUnControl} from "./Switcher/SwitcherUnControl";

function App() {

    const [rating, setRating] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [onOf, setOnOf] = useState<boolean>(false)

  return (
    <div className="App">
        Control Rating
      <RatingControl ratingValue={rating} setRating={setRating}/>

        <br/>
        UnControl Rating
        <RatingUnControl/>
        <br/>
        Control Accordion
        <AccordionControl collapsed={collapsed} setCollapsed={()=>{setCollapsed(!collapsed)}} />
        <br/>
        UnControl Accordion
        <AccordionUnControl/>
        <br/>
        Control Switcher
        <SwitcherControl modeOnOf={onOf} setOnOf={()=>{setOnOf(!onOf)}}/>
        <br/>
        UnControl Switcher
        <SwitcherUnControl/>
    </div>
  );
}

export default App;


