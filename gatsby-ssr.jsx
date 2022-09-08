

// Wraps every page in a component
import React from "react"
import ContextProvider from "./src/gatsbyContext/gatsbyContext"
export const wrapPageElement = ({ element }) => {
  return <ContextProvider>{element}</ContextProvider>
}