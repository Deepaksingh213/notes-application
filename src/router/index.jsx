import Dashboard from "@/component/Dashboard";
import AddNotes from "@/pages/AddNotes";
import ViewNotes from "@/pages/ViewNotes";
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
      ]
    },
   
  ]);
  export default router;