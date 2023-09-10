import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UPDATETHEME } from "../store/reducer/theme"

const useTheme = ()=>{
    const [theme,setTheme]=useState({})

    const {selectedTheme}=useSelector((state)=>{
        return{
            selectedTheme:state.selectedTheme
        }
    })
    const dispatch = useDispatch()
    const changeTheme = (value)=>{
        dispatch(UPDATETHEME(value))
        localStorage.setItem("theme",value)
    } 
    useEffect(()=>{
        if(selectedTheme==="dark"){
            setTheme({
                "color-primary": "#fbfbfe",
                "color-secondary": "#03001C",
                "color-accent": "#fd6f53",
                "font-color": "#fbfbfe"
            })
        }else{
            setTheme({
            "color-primary": "#03001C",
            "color-secondary": "#fbfbfe",
            "color-accent": "#ECB365",
            "font-color": "#03001C"
            })
        }
    },[selectedTheme])
    return [theme,changeTheme]
}
export default useTheme