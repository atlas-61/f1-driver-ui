import React from "react";
import { useTable } from "./TableContext.jsx";

function TableDisplay (){
    const {state, remove} = useTable();

    return state.map(({key, driver, car, number}) => (
        <div>
        <li key={key.toString()}>{key}. Driver: {driver}, Car: {car}, Number: {number} 
        <button style={{margin: 10}} onClick={() => remove(key)}>Delete</button> </li>
        
        </div>
    ))
}

export default function Table (props){    

    return(
        <div style={{marginTop: 20}}>
            <h2>Driver List</h2>
            <TableDisplay/>
        </div>
    )
}