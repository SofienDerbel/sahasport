'use client'

import React from 'react';
import { Toaster } from 'react-hot-toast';
//we need to have at least one parent as use client to use the toaster in our app, toaster uses useEffect from react
const ToasterProvider = () => {
    return (
        <Toaster/>
    );
};

export default ToasterProvider;