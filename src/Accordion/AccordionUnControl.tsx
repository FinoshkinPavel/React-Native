import React, {useState} from 'react';



export const AccordionUnControl = () => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionHeader setCollapsed={setCollapsed} collapsed={collapsed}/>
            {collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionHeaderPropsType = {
    setCollapsed: (value: boolean)=>void
    collapsed: boolean
}

const AccordionHeader = (props: AccordionHeaderPropsType) => {

    const clickChangeCollapsedHandler = () => {
      props.setCollapsed(!props.collapsed)
    }

    return(
        <h3 onClick={clickChangeCollapsedHandler}>-Menu-</h3>
    )
}


const AccordionBody = () => {

    const style = {
        listStyleType: 'none',
    }

    return(
        <ul style={style}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

