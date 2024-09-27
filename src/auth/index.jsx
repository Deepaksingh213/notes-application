

//dosetnotes set data from local storage
export const doSetNotes = (data) =>{
    localStorage.setItem("data", JSON.stringify(data) || [])
}



//doRemovesetnotes remove data from local storage

export const doRemoveNotes = () =>{
    localStorage.removeItem("data")
}


export const GetAllNotes = () =>{
    const data = JSON.parse(localStorage.getItem("data"));
    if(data !== null){
        return data
    }else return false
}