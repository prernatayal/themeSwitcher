import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../globalSections/Header'
import useTheme from '../customHooks/useTheme'

const Layout = ({children}) => {
  const [theme]=useTheme()
  // let themeColor={
  //   "color-primary": "#0060df",
  //   "color-secondary": "#fbfbfe",
  //   "color-accent": "#fd6f53",
  //   "font-color": "#000000",
  // }
  useEffect(() => {
    // get the root elements
    const root = document.getElementById("root");
    if (theme) {
      for (let globalcssitem in theme) {
        root.style.setProperty(`--${globalcssitem}`, theme[globalcssitem]);
      }
      
    }
  }, [theme])
  return (
   <React.Fragment>
    <Header />
    {children}
   </React.Fragment>
  )
}

export default Layout