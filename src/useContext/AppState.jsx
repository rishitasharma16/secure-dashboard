import React, { useState } from 'react'
import AppContext from './AppContext'

function AppState({children}) {

    const [IsLoading,setIsLoading] = useState(true)
    const [token,setToken] = useState()

  return (
    <AppContext.Provider value={{token,setToken,IsLoading,setIsLoading}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppState