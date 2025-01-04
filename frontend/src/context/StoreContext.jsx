/* What is Context?
Context is a way to share data across multiple components in a React app 
without passing props manually at every level.
Think of it like a global store for specific data that any component can access directly.*/

/* What is a Context Provider?
A Context Provider is a component that wraps other components and provides the shared data to
them. It tells React what data is available for the child components to use. */

/* Purpose of This Code
The code creates a system for sharing data (StoreContext) and a provider (StoreContextProvider) 
that supplies this data to any component that needs it.*/

/* In React, props (short for properties) are used to pass data from a parent component 
to a child component. They make components reusable and dynamic by allowing the parent 
to customize the child’s behavior. */


/* The code defines a React Context (StoreContext) and its 
provider component (StoreContextProvider). StoreContext is used to 
share data across components without manually passing props at every level.
StoreContextProvider wraps components and provides shared data (contextValue) 
to its children. */

import { createContext, useState, useEffect } from "react";
// Context in React is a way to share data (like state or functions) 
// across the component tree without needing to pass props manually at 
// every level.
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null)

// StoreContextProvider: a functional component that provides the 
// StoreContext value to all child components.
const StoreContextProvider = (props) => {
    // props represents the properties passed to the StoreContextProvider 
    // when it is used

    const [cartItems, setCartItems] = useState({});


    const addToCart = (itemID) => {
        if(!cartItems[itemID]){
            setCartItems((prev)=>({...prev,[itemID]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemID]:prev[itemID]+1}))
        }
    }

    const removeFromCart = (itemID) => {
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
    }  

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    const contextValue = {
        // The object contextValue holds the data (state, functions, etc.) 
        // that you want to share with child components. This value will be 
        // accessible to any component that consumes the StoreContext.
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return (
    //    Value prop Passes the shared data (contextValue) into the 
    //    context provider so child components can access it.
        <StoreContext.Provider value = {contextValue}>
            {/* props.children Allows child components to be rendered inside 
            the provider, enabling them to consume the context. */}
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider


