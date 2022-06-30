import React, {useState} from 'react';
import {AccordionControl} from "./AccordionControl";
import {actions} from "@storybook/addon-actions";


export default {
    title:'Accordion Control',
    component: AccordionControl
}

let callback = actions('mode change')

export const AccordionModeActive = () => <AccordionControl collapsed={true} setCollapsed={()=>{}} />
export const AccordionModeDisabled = () => <AccordionControl collapsed={false} setCollapsed={()=>{}}/>
export const AccordionChangeAction = () => {

    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <AccordionControl collapsed={collapsed} setCollapsed={() => {setCollapsed(!collapsed)}}/>
    )
}