import React from 'react';

export const ThemeContext =  React.createContext();

export const ThemeProvider = ({ children }) =>{

    const [theme, setTheme] = React.useState('light');
 
    const toggleTheme = () => {
        if (theme === 'light'){
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return(
        <ThemeContext.Provider v >
            {children}
        </ThemeContext.Provider>
    )
}
const ThemeManager = () => {}

export default ThemeManager;