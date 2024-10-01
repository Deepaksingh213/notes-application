import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { PiSpinnerBold } from "react-icons/pi";
import { Textarea } from "@/components/ui/textarea";
import NoteContext from "@/context/noteContex";

const selectMenu = [
  { id: -1, statusValue: "Select Your Notes Status" },
  { id: 0, statusValue: "New" },
  { id: 1, statusValue: "In Progress" },
  { id: 2, statusValue: "Completed" },
  { id: 3, statusValue: "On Hold" },
  { id: 4, statusValue: "Canceled" },
];

const AddNotes = () => {
  const {notes,setNotes} = useContext(NoteContext);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    id:"",
    title: "",
    content: "",
    statusId: -1,
    date: "",
  });

  const ClearData = () => {
    setData({
      title: "",
      content: "",
      statusId: -1,
      date: "",
    });
  };

  const handleChange = (e, property) => {
    setData({
      ...data,
      [property]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if(data.title===undefined || data.title.trim() === ""){
      return toast.error("title is required!!")
    }
    if(data.content===undefined || data.content.trim() === ""){
      return toast.error("title is required!!")
    }
    if(data.statusId===undefined || data.statusId.trim() === ""){
      return toast.error("title is required!!")
    }
    if(data.date===undefined || data.date.trim() === ""){
      return toast.error("title is required!!")
    }

    const noteList={
      ...data, id: Math.round(Math.random()*100000)
    }
    
   setNotes([...notes, noteList]);


    toast.success("Note added successfully");
  };

  return (
    <section className="flex items-center justify-center min-h-screen ">
     
      <div className="bg-gray-600 p-6 rounded-lg shadow w-full max-w-md">
        <h1 className="text-2xl font-semibold text-white text-center mb-4">Add Notes Here!</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full gap-2 mt-4">
            <Label htmlFor="title" className="text-white">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="Enter your title"
              value={data.title}
              onChange={(e) => handleChange(e, "title")}
              className="rounded-lg"
            />
          </div>
          <div className="grid w-full gap-2 mt-4">
            <Label htmlFor="content" className="text-white">Your Notes</Label>
            <Textarea
              placeholder="Type your message here."
              value={data.content}
              onChange={(e) => handleChange(e, "content")}
              className="rounded-lg"
            />
          </div>
          <div className="grid w-full gap-2 mt-4">
            <label htmlFor="statusId" className="text-white">Select Your Status</label>
            <select
              id="statusId"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              value={data.statusId}
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
              value={data.date}
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
      </div>
    </section>
  );
};

export default AddNotes;
