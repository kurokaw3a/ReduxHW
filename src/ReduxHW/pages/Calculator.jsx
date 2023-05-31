import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculatorActionsType } from '../store/Calculator/Calculator';

const Calculator = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.calculator)

    const plus = () => {
        dispatch({ type: calculatorActionsType.ADD })
    }
    const subtract = () => {
        dispatch({ type: calculatorActionsType.SUBTRACT })

    }
    const multilpy = () => {
        dispatch({ type: calculatorActionsType.MULTILPLY })
    }
    const reset = () => {
        dispatch({ type: calculatorActionsType.RESET })
    }
    const divide = () => {
        dispatch({ type: calculatorActionsType.DIVIDE })
    }

    return (
        <div style={{ margin: "100px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <h1>calculator</h1>
            <div> <span style={{ fontSize: "20px" }}>result</span> {state.result}</div>
            <div>
                <button onClick={plus}>+5</button>
                <button onClick={subtract}>-3</button>
                <button onClick={multilpy}>*2</button>
                <button onClick={divide}>/2</button>
            </div>
            <button onClick={reset}>RESET</button>
        </div>
    );
};

export default Calculator;