import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, NavLink, Outlet } from "react-router-dom";
import { PiNotebookBold } from "react-icons/pi";
import { SlNotebook } from "react-icons/sl";
import { VscNotebook } from "react-icons/vsc";

const Dashboard = () => {
  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-gray-800">
        <div className="hidden border-r  md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link to="/add-notes" className="flex items-center gap-2 font-semibold text-white">
                <PiNotebookBold className="h-6 w-6" />
                <span> Three Assigment Here!!</span>
              </Link>
            </div>
            <div className="flex-1 " >
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
                <NavLink
                  to="/custom-localStorge"
                
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-700 hover:text-white ${
                      isActive ? 'bg-gray-700 text-white' : 'text-gray-300'
                    }`
                  }
                >
                  <SlNotebook className="h-4 w-4" />
                Local Storge
                </NavLink>
                <NavLink
                  to="/custom-windowResize"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:bg-gray-700 hover:text-white"
                >
                  <VscNotebook className="h-4 w-4" />
                Window Resize
                </NavLink>
                <NavLink
                  to="/custom-memsGenerator"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:bg-gray-700 hover:text-white"
                >
                  <VscNotebook className="h-4 w-4" />
               Random Mems Generator
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b  px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5 text-gray-300" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col bg-gray-800 text-white">
                <nav className="grid gap-2 text-lg font-medium">
                <NavLink
                  to="/custom-localStorge"
                
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-700 hover:text-white ${
                      isActive ? 'bg-gray-700 text-white' : 'text-gray-300'
                    }`
                  }
                >
                  <SlNotebook className="h-4 w-4" />
                Local Storge
                </NavLink>
                <NavLink
                  to="/custom-windowResize"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:bg-gray-700 hover:text-white"
                >
                  <VscNotebook className="h-4 w-4" />
                Window Resize
                </NavLink>
                <NavLink
                  to="/custom-memsGenerator"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 transition-all hover:bg-gray-700 hover:text-white"
                >
                  <VscNotebook className="h-4 w-4" />
               Random Mems Generator
                </NavLink>
                </nav>
              </SheetContent>
            </Sheet>
            {/* <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full appearance-none bg-gray-700 pl-8 text-white shadow-none md:w-2/3 lg:w-1/3"
                  />
                </div>
              </form>
            </div> */}
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
