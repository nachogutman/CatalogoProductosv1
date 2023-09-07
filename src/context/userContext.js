import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { createContext } from 'react';

export const UserContext = createContext();

export const ListaProvider = ( props ) => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products/")
            .then((response) => {
                
                setLista(response.data.products);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    if(lista != undefined){
        return (
            <UserContext.Provider value={{lista}}>
                {props.children}
            </UserContext.Provider>
        );
    }else{
        return (
            <UserContext.Provider value={'api janeada'}>
                {props.children}
            </UserContext.Provider>
        );
    }
    
}

export default ListaProvider;