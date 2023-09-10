import React, { useState } from 'react';
import Modal from '../PopUp/Modal';
import './list.css';
import { useSelector } from 'react-redux';
import EmptySection from './EmptySection';

const List = ({openModal, setModal,title, description,handleOnChange,handleSaveBtn,validationErr,handleEditBtn,editState,handleDeleteBtn,
  handleUpdateStatus,handleCloseModal,sortBy}) => {

  const tasks = useSelector((state)=> state.tasks);

  return (
 <React.Fragment>
 
  {tasks.length? <div className='table-container'>
<table>
  <tr className='heading-section'>
    <th className='heading-tab'>Heading</th>
    <th className='heading-desc'>Description</th>
    <th className='heading-status'>Status</th>
    <th className='heading-button'></th>
  </tr>
 {tasks && tasks?.length >0 ? 
   tasks.filter((item) => {
                        if(sortBy!=="All"){
                          return(
                            item.status===sortBy?item:""
                          )
                        }else{
                          return item
                        }
                      }).map((item, key)=>{
    return(
  <tr className='description' key={key}>
    <td data-column="Heading">{item?.title}</td>
    <td data-column="Description">{item?.description} </td>
    <td data-column="Status">
      <div>
      <select value={item?.status} className='status-dropdown' name="cars" id="cars"
      onChange={(e)=>handleUpdateStatus(e,key)} >
         <option className='option' value="Pending">Pending</option>
         <option  className='option' value="Completed">Completed</option>

  </select>
      </div>
    </td>
    <td>
      <div className='iconNames'>
          <i className='icon-delete' onClick={()=>handleDeleteBtn(key)}></i>
          <i className='icon-edit' onClick={()=>{
            handleEditBtn(item, key)
            setModal(true)
            }}></i>
      
      </div>
    </td>
  </tr>
  );
  })
  :""
}

</table>
</div>:<h5 onClick={()=>setModal(true)} className='noRecords'>No records Found. Click to add New Task</h5>}
  
  
{
openModal && openModal===true?
<Modal openModal={openModal} setModal={setModal}
            title={title}  description={description} handleOnChange={handleOnChange}
            handleSaveBtn={handleSaveBtn} validationErr={validationErr} handleEditBtn={handleEditBtn}
            editState={editState} handleDeleteBtn={handleDeleteBtn} handleUpdateStatus={handleUpdateStatus} handleCloseModal={handleCloseModal}  />
: "" 
}
 </React.Fragment>
  )
}

export default List