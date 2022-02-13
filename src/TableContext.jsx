import React from "react";

const TableContext = React.createContext();

const initialState = [{key: 1, driver: "Fernando Alonso", car: "Alpine F1 Team", number: 14}, {key: 2, driver: "Charles Leclerc", car:"Scuderia Ferrari", number: 16}]

function tableReducer(state, action) {
  switch (action.type) {
    case "INSERT_DRIVER": {
      return state.concat(action.payload)
    }
    case "DELETE_DRIVER": {
      return state.filter(function(row) { return row.key != action.payload; });
    }
    default: {
      throw new Error(`${action.type} action type not defined`);
    }
  }
}

function TableProvider(props) {

    const [state, dispatch] = React.useReducer(tableReducer, initialState)
    
    return <TableContext.Provider value={{ state, dispatch }} {...props} />;
  }

  function useTable() {
    const context = React.useContext(TableContext);

    if (!context) {
      throw new Error(`useTable, must be child component of TableProvider.`);
    }
    
    const { state, dispatch } = context;

  /** actions */

    const insert = (driver) => dispatch({ type: "INSERT_DRIVER", payload: driver });

    const remove = (key) => dispatch({ type: "DELETE_DRIVER", payload: key });

    return {
      state,
      dispatch,
      insert,
      remove,
    };

  }

  export {TableProvider, useTable};