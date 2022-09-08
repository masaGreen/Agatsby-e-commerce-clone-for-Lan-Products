import React from "react"
import {createContext, useState} from "react"

export const GatsbyContext = createContext()

const ContextProvider = ({children})=>{
    const [cartItems, setCartItems] = useState(0)
    const [openDrawer, setOpenDrawer] = useState(false);
    const [itemsAdded,setItemsAdded] = useState([])
    
    return(
        <GatsbyContext.Provider value={{
            cartItems, setCartItems,openDrawer, setOpenDrawer,itemsAdded,setItemsAdded
            }}>
            {children}
        </GatsbyContext.Provider>
    )
}

export default ContextProvider