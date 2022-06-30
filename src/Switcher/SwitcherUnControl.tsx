import React, {useState} from 'react';



export const SwitcherUnControl = () => {

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

    const [modeOnOff, setModeOnOff] = useState(true)

    const clickChangeModeSwitcherHandler = () => {
      setModeOnOff(!modeOnOff)
    }

    return (
        <div style={styleWrap}>
            <div style={styleButton}>
                <div onClick={clickChangeModeSwitcherHandler} style={modeOnOff ? styleOnActive : onDisabled}>on</div>
                <div onClick={clickChangeModeSwitcherHandler} style={modeOnOff ? styleOffActive : offDisabled}>off</div>
            </div>
            <div>
                <div style={modeOnOff ? styleIndicatorActive : styleIndicatorDisable}></div>
            </div>
        </div>
    );
};

