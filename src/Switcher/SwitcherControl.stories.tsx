import React, {useState} from "react";
import {SwitcherControl} from "./Swither Control";

export default {
    title: 'Switcher Control',
    component: SwitcherControl
}

export const SwitcherModeOn = () =>  <SwitcherControl modeOnOf={true} setOnOf={()=>{}}/>
export const SwitcherModeOf = () =>  <SwitcherControl modeOnOf={false} setOnOf={()=>{}}/>

export const SwitcherModeChange = () => {

    const [onOf, setOnOf] = useState<boolean>(false)

    return(
        <SwitcherControl modeOnOf={onOf} setOnOf={()=>{setOnOf(!onOf)}}/>
    )
}