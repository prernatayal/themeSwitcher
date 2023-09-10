import React from 'react';
import './tasks.css'

const AddTasks = () => {
  return (
   <React.Fragment>
    <div className='input-wrap'>
        <div className='add-contaier'>
        <input type="text" placeholder='enter heading' />
    </div>
    <div className=' add-contaier class-textArea'>
        <textarea className='description' placeholder='enter description text' name="description" rows="5" ></textarea>
        </div>
        <div className=' add-contaier   button-wrap'>
            <button className='save-btn'>save</button>
        </div>
    </div>

   </React.Fragment>
  )
}

export default AddTasks