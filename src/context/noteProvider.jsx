
import {useState } from "react"
import NoteContext from "./noteContex"



export  const NoteProvider = ({children}) => {
    const [notes,setNotes]=useState([])
    console.log('notes>>>>>>>>>>>>>>>>>>>', notes)
    return (
    <>
    <NoteContext.Provider value={{notes,setNotes}}>
      {children}
    </NoteContext.Provider>
    
    </>
  )
}




