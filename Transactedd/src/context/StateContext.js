import { createContext, useContext, useState, useEffect } from "react"

const Context = createContext()



export const StateContext = ({ children }) => {
    const [isToggled, setIsToggled] = useState(false)




    return <Context.Provider value={{ isToggled, setIsToggled }}>
        {children}
    </Context.Provider>
}

export const useStateContext = () => useContext(Context)


