'use client'
import React, { useEffect, useState } from 'react';

//To fix problem with hydration between client and server components rendering
interface ClientOnlyProps{
    children: React.ReactNode;
}
const ClientOnly: React.FC<ClientOnlyProps> = ({children}) => {
    const [hasMounted,setHasMounted] = useState(false);
    useEffect(()=>{
        setHasMounted(true)
    },[]);

    if(!hasMounted){
        return null
    }
    return (
        <>
            {children}
        </>
    );
};

export default ClientOnly;