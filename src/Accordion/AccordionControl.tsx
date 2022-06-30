import React from 'react';

type AccordionControlPropsType = {
    collapsed: boolean
    setCollapsed: ()=>void
}

export const AccordionControl = (props: AccordionControlPropsType) => {
    return (
        <div>
           <AccordionHeader setCollapsed={props.setCollapsed}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    );
};

type  AccordionHeaderPropsType = {
    setCollapsed: ()=>void
}

const AccordionHeader = (props: AccordionHeaderPropsType) => {

    return(
      <h3 onClick={props.setCollapsed}>-Menu-</h3>
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

