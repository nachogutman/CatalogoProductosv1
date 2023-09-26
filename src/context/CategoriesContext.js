import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { createContext } from 'react';

export const CategoriesContext = createContext();

export const CategoriesProvider = ( props ) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products/categories/")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if(categories != undefined){
        return (
            <CategoriesContext.Provider value={{categories}}>
                {props.children}
            </CategoriesContext.Provider>
        );
    }else{
        return (
            <CategoriesContext.Provider value={'api janeada'}>
                {props.children}
            </CategoriesContext.Provider>
        );
    }
    
}

export default CategoriesProvider;