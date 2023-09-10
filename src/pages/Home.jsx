import React, { useState } from 'react'
import AddTasks from '../components/AddTasks/AddTasks'
import List from '../components/List/List'
import DropDown from '../components/SortDropDown/DropDown'
import './home.css'
import useManageTasks from '../customHooks/useManageTasks'
import { useSelector } from 'react-redux'


const Home = () => {

  const [openModal, setOpenModal,title, description,handleOnChange,handleSaveBtn,validationErr,handleEditBtn,editState,
    handleDeleteBtn,handleUpdateStatus,handleCloseModal,sortBy,handleSort] = useManageTasks();

      const tasks = useSelector((state)=> state.tasks);
      
  const sort = ["All",'Pending',"Completed"];

  return (
    <React.Fragment>
     <div className='sort-wrapper'>
        <div className='container'>
        <p className='count-p'>{tasks?.length || 0} Tasks</p>
          <div className='sort-container'>
          <div className='sortbyWrap'>
          <p className='sort-text'>Sort By</p>
          <DropDown  name={sortBy} content={sort} handleSelect={(val)=>handleSort(val)}/>
          </div>
          <div>
            <button className='create-button' onClick={()=> setOpenModal(true)}>Create</button>
          </div>

  
          </div>
     
          {/* <div className='tasks-wrap'>
          <AddTasks />
        </div> */}

        <div className='list-wrapper'>
            <List openModal={openModal} setModal={setOpenModal} sortBy={sortBy}
            title={title}  description={description} handleOnChange={handleOnChange}
            handleSaveBtn={handleSaveBtn} validationErr={validationErr} handleEditBtn={handleEditBtn}
            editState={editState} handleDeleteBtn={handleDeleteBtn} handleUpdateStatus={handleUpdateStatus} handleCloseModal={handleCloseModal}
            />
        </div>
        </div>

        {/* // add tasts  */}
     

      
      
        </div>   
    </React.Fragment>
  )
}

export default Home