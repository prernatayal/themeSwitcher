import React, { useEffect, useState } from 'react';
import './header.css';
import useTheme from '../customHooks/useTheme';

const Header = () => {
  const [theme,changeTheme]=useTheme()
  const [checked,setChecked]=useState(false)
  const handleTheme = (e)=>{
    if(e.target.checked){
      setChecked(true)
      changeTheme("dark")
    }else{
      setChecked(false)
      changeTheme("light")
    }
  }
  useEffect(()=>{
    if(localStorage.getItem("theme")){
      let data =  localStorage.getItem("theme")
      if(data==="dark"){
        setChecked(true)
      }else{
        setChecked(false)
      }
    }
  },[])
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-wrapper'>
          <div className='logo-wrap'>
            <h3>Flexi Task</h3>
          </div>
          <div className='switch-wrap'>

          <label class="switch">
  <input type="checkbox"  onChange={(e)=>handleTheme(e)} checked={checked} />
  <span class="slider round"></span>
</label>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header