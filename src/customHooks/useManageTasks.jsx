import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { CREATE_Task, REMOVE_TASK, SORT_FILTER, UPDATE_TASK, UPDATE_TASK_STATUS } from "../store/reducer/tasks";

const useManageTasks = ()=>{

    const dispatch = useDispatch()

    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [validationErr, setValidationErr] = useState(false);
    const [editState, setEditState] = useState(-1);
     const [editData, setEditData] = useState("");
     const [sortBy,setSortBy]=useState("All")

    const handleCloseModal = ()=>{
        setOpenModal(false);
        setTitle("");
        setEditState(-1);
        setEditData("")
        setDescription("");
        setValidationErr(false);
    }

    const handleOnChange = (value, type)=>{
        switch(type){
            case "title":
                setTitle(value);
                break;

                 case "description":
                setDescription(value);
                break;

                default:
                    break;
        }
        setValidationErr(false);
    }

    const handleSaveBtn = ()=>{

        let data={
            title: title,
            description: description,
            status: "Pending",
        }

        let newData ={
            ...editData,
            title: title,
            description: description,
        }

        if(title){
            if(editState !==-1){
             dispatch(UPDATE_TASK({
                key: editState,
                data: newData
             }))
            }
            else {
                dispatch(CREATE_Task(data));
            }
            handleCloseModal();
            
        }
        else{
            setValidationErr(true);
        }

    }

   const handleEditBtn = (item, key)=>{
    setEditState(key);
    setEditData(item);
     setTitle(item?.title);
     setDescription(item?.description);
   }

   const handleDeleteBtn = (key)=>{
    dispatch(REMOVE_TASK(key));
   }

   const handleUpdateStatus = (e,key)=>{
      console.log(e.target.value, "selecte");
      dispatch(UPDATE_TASK_STATUS({
                key: key,
                data: e.target.value
             }))
   }

   const handleSort = (val)=>{
    setSortBy(val);
   }


    return [openModal, setOpenModal,title, description,handleOnChange,handleSaveBtn,validationErr,handleEditBtn,editState,handleDeleteBtn,
        handleUpdateStatus,handleCloseModal,sortBy,handleSort]

}

export default useManageTasks;