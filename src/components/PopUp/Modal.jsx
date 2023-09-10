import React from 'react';
import './popup.css'

const Modal = ({openModal, setModal,title, description,handleOnChange,handleSaveBtn,validationErr,handleEditBtn,editState,handleDeleteBtn,
    handleUpdateStatus,handleCloseModal}) => {


    console.log(editState, "linenjo 9")

  return (
   <React.Fragment>
    <div className='popContainer'>
       <div className='popUpWrapper'>
           
       <div className='input-wrap'>
        <div className='add-contaier'>
        <input type="text" placeholder='Enter Title' value={title} onChange={(e)=>handleOnChange(e.target.value, "title")} />
        {validationErr && validationErr === true ?
        <p style={{color: "white", padding: "2px 0px"}} >Title required.</p>
        :"" }
    </div>
    <div className=' add-contaier class-textArea'>
        <textarea className='description' placeholder='Enter description' name="description" rows="5"
        value={description} onChange={(e)=>handleOnChange(e.target.value, "description")} ></textarea>
        </div>
        <div className=' add-contaier   button-wrap'>
            {editState !==-1 ?
              <button className='save-btn' onClick={()=> {
                handleSaveBtn();
            }}>Update</button>
            :
              <button className='save-btn' onClick={()=> {
                handleSaveBtn();
            }}>Save</button>
        }
          
        </div>
    </div>
       </div>

       <div className='closeWrap' onClick={handleCloseModal}>
        <p className='close'>Close</p>
       </div>

    </div>
   </React.Fragment>
  )
}

export default Modal