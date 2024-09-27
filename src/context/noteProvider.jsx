
import { useEffect, useState } from "react"
import NoteContext from "./noteContex"
import { doSetNotes, GetAllNotes } from "@/auth"


export  const NoteProvider = ({children}) => {
    const [notes,setNotes]=useState([])
    

    useEffect(() => {
      setNotes(GetAllNotes())
    }, []);


    const NotesSetData=(data)=>{
        setNotes(data);
        doSetNotes((data))
     }
     
 
   
  return (
    <>
    <NoteContext.Provider value={{notes,setNotes, setCheck:NotesSetData}}>
      {children}
    </NoteContext.Provider>
    
    </>
  )
}




