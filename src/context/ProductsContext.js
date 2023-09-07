import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { createContext } from 'react';

export const ProductsContext = createContext();

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
            <ProductsContext.Provider value={{lista}}>
                {props.children}
            </ProductsContext.Provider>
        );
    }else{
        return (
            <ProductsContext.Provider value={'api janeada'}>
                {props.children}
            </ProductsContext.Provider>
        );
    }
    
}

export default ListaProvider;