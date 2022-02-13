import React, { useRef } from 'react';
import { useTable } from './TableContext';

export default function RacerForm (props){
    const formRef = useRef(null)

    let driver = null;
    let car = null
    let number = null

    const onSubmit = (event) => {
        event.preventDefault()
    }

    const onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        switch (name) {
            case "driver":
                driver = value
                break;
            case "car":
                car = value
                break;
            case "number":
                number = value
                break;
        }
    }

    const RacerInput = () => {
        const {state, insert} = useTable()
        let nextKey = Math.max.apply(Math, state.map(function(val) { return val.key; })) + 1;
        nextKey = nextKey === -Infinity ? 0 : nextKey;

        return (
            <form ref={formRef} onSubmit={onSubmit}>
            <label>Driver</label>
            <input name="driver" style={{margin: 10}} onChange={onChange}/>
            <label>Car</label>
            <input name="car" style={{margin: 10}} onChange={onChange}/>
            <label>Number</label>
            <input name="number" style={{margin: 10}} onChange={onChange}/>
            <button style={{marginLeft: 10}} value="Add" onClick={() => insert({key: nextKey, driver: driver, car: car, number: number})}>Add</button>
            <input style={{marginLeft: 10}} type="reset" value="Clear"/>
            </form>
        )
    }
  
    return(
        <div>
            <RacerInput/>
        </div>
    );
}