import NoteContext from "@/context/noteContex";
import React, { useContext, useState  } from "react";
import { StatusList } from "@/helper/helper";
import { NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { PiSpinnerBold } from "react-icons/pi";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const selectMenu = [
  { id: -1, statusValue: "Select Your Notes Status" },
  { id: 0, statusValue: "New" },
  { id: 1, statusValue: "In Progress" },
  { id: 2, statusValue: "Completed" },
  { id: 3, statusValue: "On Hold" },
  { id: 4, statusValue: "Canceled" },
];

const ViewNotes = () => {
  const { notes, setNotes } = useContext(NoteContext);
  
  const [loading, setLoading] = useState(false);
  const [selected, setSelected]=useState()

  const ClearData = () => {
    setSelected({
      title: "",
      content: "",
      statusId: -1,
      date: "",
    });
  };

  const handleChange = (e, property) => {
    setSelected({
      ...selected,
      [property]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
  
    // Validation
    if (!selected.title || selected.title.trim() === "") {
      return toast.error("Title is required!");
    }
    if (!selected.content || selected.content.trim() === "") {
      return toast.error("Content is required!");
    }
    if (selected.statusId === undefined || selected.statusId === -1) {
      return toast.error("Please select a valid status!");
    }
    if (!selected.date || selected.date.trim() === "") {
      return toast.error("Date is required!");
    }
  
    setLoading(true);
  
    // Simulate async operation like a server request
    try {
      const updatedNotes = notes.map((note) => 
        note.id === selected.id ? selected : note
      );
      setNotes(updatedNotes);
  
      toast.success("Note updated successfully");
    } catch (error) {
      toast.error("An error occurred while updating the note.");
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };
  
  const handleDelete = (id) => {
    const newList = notes.filter((s) => s.id != id);
    setNotes(newList);
  };

  return (
    <div className="container mx-auto ">
      {notes && notes.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {notes.map((item, index) => (
            <div
              key={index}
              className="bg-gray-400/50 rounded-lg shadow-lg p-4 flex flex-col border"
            >
              {/* Title and Delete Button */}
              <div className="flex justify-between items-start ">
                <h5 className="text-xl font-semibold text-black">
                  {item.title}
                </h5>
              </div>
              {/* Status and Date */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-white">
                  Status: {StatusList[item.statusId]}
                </p>
                <h4 className="text-white text-sm">{item.date}</h4>
              </div>
              {/* Content */}
              {/* <p className="text-white  flex-grow">{item.content}</p> */}
              <div className="flex gap-6 mt-2">
                <NavLink to={`/view-details/${item.id}`}>
                  <Button className="px-4 py-1 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
                    View
                  </Button>
                </NavLink>

                <Dialog>
  <DialogTrigger className="px-4 py-1 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500" onClick={(e)=>setSelected(item)}> Update</DialogTrigger>
  <DialogContent className="bg-gray-500">
    <DialogHeader >
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
      <form onSubmit={handleSubmit}>
      <div className="grid w-full gap-2 mt-4">
            <Label htmlFor="title" className="text-white">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="Enter your title"
              value={selected?.title}
              onChange={(e) => handleChange(e, "title")}
              className="rounded-lg"
            />
          </div>
          <div className="grid w-full gap-2 mt-4">
            <Label htmlFor="content" className="text-white">Your Notes</Label>
            <Textarea
              placeholder="Type your message here."
              value={selected?.content}
              onChange={(e) => handleChange(e, "content")}
              className="rounded-lg"
            />
          </div>
          <div className="grid w-full gap-2 mt-4">
            <label htmlFor="statusId" className="text-white">Select Your Status</label>
            <select
              id="statusId"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              value={selected?.statusId}
              onChange={(e) => handleChange(e, "statusId")}
            >
              <option disabled value={-1}>
                --Select status--
              </option>
              {selectMenu.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.statusValue}
                </option>
              ))}
            </select>
          </div>
          <div className="grid w-full gap-2 mt-4">
            <Label htmlFor="date" className="text-white">Date</Label>
            <Input
              type="date"
              id="date"
              placeholder="Enter Date"
              value={selected?.date}
              onChange={(e) => handleChange(e, "date")}
              className="rounded-lg"
            />
          </div>

         
          <div className="flex gap-2 mt-4 justify-center items-center">
            <Button type="submit" className="" disabled={loading}>
              <PiSpinnerBold
                hidden={!loading}
                className="ml-2 w-5 h-5 animate-spin"
              />
              <span hidden={!loading}>Processing...</span>
              <span hidden={loading}>Add Note</span>
            </Button>
            <Button className="w-24" onClick={ClearData}>
              Clear Note
            </Button>
          </div>
        </form>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>


                <Button
                  className="px-4 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  onClick={(event) => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-white">
            No Data at this Moment
          </h2>
          <p className="text-white">Please add some notes to view them here.</p>
        </div>
      )}
    </div>
  );
};

export default ViewNotes;
