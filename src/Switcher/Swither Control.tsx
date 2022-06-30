import React from 'react';

type SwitcherControlPropsType = {
    modeOnOf: boolean
    setOnOf: ()=>void
}

export const SwitcherControl = (props: SwitcherControlPropsType) => {

    const styleOnActive = {
        width: '40px',
        height: '20px',
        background: 'green',
        border: '1px solid black',
    }
    const styleOffActive = {
        width: '40px',
        height: '20px',
        background: 'white',
        border: '1px solid black',
    }
    const styleIndicatorActive = {
        width: '20px',
        height: '20px',
        background: 'green',
        borderRadius: '20px',
        border: '1px solid black',
    }
    const styleWrap = {
        width:'150px',
        display: 'flex',
        justifyContent:'space-around',
    }
    const  styleButton = {
        display: 'flex'
    }

    const onDisabled = {
        width: '40px',
        height: '20px',
        background: 'white',
        border: '1px solid black',
    }
    const offDisabled = {
        width: '40px',
        height: '20px',
        background: 'red',
        border: '1px solid black',
    }
    const styleIndicatorDisable = {
        width: '20px',
        height: '20px',
        background: 'red',
        borderRadius: '20px',
        border: '1px solid black',
    }

    return (
        <div style={styleWrap}>
            <div style={styleButton}>
                <div style={props.modeOnOf ? styleOnActive : onDisabled} onClick={props.setOnOf}>on</div>
                <div style={props.modeOnOf ? styleOffActive : offDisabled } onClick={props.setOnOf}>off</div>
            </div>
            <div>
                <div style={props.modeOnOf ? styleIndicatorActive : styleIndicatorDisable}></div>
            </div>
        </div>
    );
};

