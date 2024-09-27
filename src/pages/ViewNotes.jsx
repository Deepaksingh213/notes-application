import NoteContext from '@/context/noteContex';
import React, { useContext } from 'react';

const ViewNotes = () => {
  const { notes } = useContext(NoteContext);

  return (
    <div className="container mx-auto p-2">
      {notes && notes.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {notes.map((item, index) => (
            <div
              key={index}
              className="bg-gray-600 rounded-lg shadow-lg p-6 flex flex-col h-full"
            >
              {/* Title and Delete Button */}
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-xl font-semibold text-black">{item.title}</h5>
                <button
                  className="px-4 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
              {/* Status and Date */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-white">Status: {item.statusId}</p>
                <h4 className="text-white text-sm">{item.date}</h4>
              </div>
              {/* Content */}
              <p className="text-white mb-4 flex-grow">{item.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-gray-800">No Data at this Moment</h2>
          <p className="text-gray-600">Please add some notes to view them here.</p>
        </div>
      )}
    </div>
  );
};

export default ViewNotes;
