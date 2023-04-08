// This context object exists as a way to scale context objects. Still looking into it.

import React, { useState } from "react";

const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    return (
        <Context.Provider value={{ items, setItems }}>
            {children}
        </Context.Provider>
    );
};
