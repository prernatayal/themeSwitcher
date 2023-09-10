import React, { useState } from 'react';
import './dropDown.css';
import Arrowdown from "../../assets/images/down.png";

const DropDown = ({name="select Dowpdown",content,handleSelect}) => {

  const [openDropDown,setDropDown] = useState(false)
  return (
    <React.Fragment>
      <div className='dropDown-earpper'>
          <div className='button' onClick={()=>{setDropDown(!openDropDown)}}>
            <p>{name}</p>
            <img  className={`icondown ${openDropDown ? "iconRotate" :""}`} src={Arrowdown}></img>
         
          </div>
          {
            openDropDown &&
          <div className='dropDown-content'>
            <ul className='dropdown-ul'>
              {

             content.map((list,index)=>(
                
              <li className='li' key={index} onClick={()=>{setDropDown(!openDropDown);handleSelect(list)}}>{list}</li>
             )
             )
              }
           

            </ul>
          </div>
}
      </div>
    </React.Fragment>
  )
}

export default DropDown