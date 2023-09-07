import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = React.createContext();

export const ListaProvider = ({ children }) => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products/")
            .then((response) => {
                console.log(response)
                setLista(response.data.products);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if(lista != undefined){
        return (
            <UserContext.Provider value={lista}>
                {children}
            </UserContext.Provider>
        );
    }else{
        return (
            <UserContext.Provider value={'api janeada'}>
                {children}
            </UserContext.Provider>
        );
    }
    
}

export default ListaProvider;