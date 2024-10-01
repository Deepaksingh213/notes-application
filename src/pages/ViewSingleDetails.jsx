
import { useParams } from 'react-router-dom'
import  {StatusList } from '@/helper/helper';
import NoteContext from '@/context/noteContex';
import { useContext } from 'react';

const ViewSingleDetails = () => {
    const {notesId}  = useParams();
   console.log('notesId', notesId)
    const { notes } = useContext(NoteContext);
    console.log('notes............', notes)
     const note = notes.find(note => note.id === parseInt(notesId));
    console.log('note', note);
  return (
    <>
          {
            note ? <div className=' bg-gray-400/50 rounded-lg shadow-lg p-4 flex flex-col border  space-y-4'>
       
            <div className="flex justify-between items-start ">
        <h5 className="text-xl font-semibold text-black">{note?.title}</h5>
        
      </div>
      {/* Status and Date */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-white">Status: { StatusList[note?.statusId]}</p>
        <h4 className="text-white text-sm">{note?.date}</h4>
      </div>
      {/* Content */}
      <p className="text-white  flex-grow">Content: {note?.content}</p>
  </div> : <div className='text-2xl font-bold text-white text-center'>No data Avaliable</div>
          }
    
    </>
  )
}

export default ViewSingleDetails