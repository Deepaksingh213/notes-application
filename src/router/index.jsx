import Dashboard from "@/component/Dashboard";
import LocalStorgeHook from "@/pages/LocalStorgeHook";
import RandomMemsGenerators from "@/pages/RandomMemsGenerators";
import WindowResizeHooks from "@/pages/WindowResizeHooks";

import { createBrowserRouter } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children:[
        {
            path: "/custom-localStorge",
            element: <LocalStorgeHook />
          },
          {
            path: "/custom-windowResize",
            element: <WindowResizeHooks />
          },
          {
            path: "/custom-memsGenerator",
            element: <RandomMemsGenerators />
          },
      ]
    },
   
  ]);
  export default router;