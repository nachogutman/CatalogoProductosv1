import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { createContext } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = (props) => {
    <CarritoContext.Provider value={{ }}>
        {props.children}
    </CarritoContext.Provider>
}

export default CarritoProvider;