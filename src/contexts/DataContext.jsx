import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [data, setData] = useState({
        todo: '',
        isChecked: false
    });

    const [newData, setNewData] = useState([]);

    return (
        <DataContext.Provider value={{ data, setData, newData, setNewData }}>
            {children}
        </DataContext.Provider>
    );
};

const useDataContext = () => useContext(DataContext);
export { DataProvider, useDataContext };