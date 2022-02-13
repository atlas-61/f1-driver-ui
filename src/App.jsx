import React from 'react';
import RacerForm from './RacerForm'
import Table from './Table'
import { TableProvider } from "./TableContext.jsx";

function App() {

    return (
        <div>
            <TableProvider>
                <RacerForm/>
                <Table/>
            </TableProvider>
        </div>
    )
}

export default App;
