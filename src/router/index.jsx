import Dashboard from "@/component/Dashboard";
import AddNotes from "@/pages/AddNotes";
import ViewNotes from "@/pages/ViewNotes";
import ViewSingleDetails from "@/pages/ViewSingleDetails";
import { createBrowserRouter } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children:[
        {
            path: "/add-notes",
            element: <AddNotes />
          },
          {
            path: "/view-notes",
            element: <ViewNotes />
          },
          {
            path: "/view-details/:notesId",
            element: <ViewSingleDetails />
          },
      ]
    },
   
  ]);
  export default router;