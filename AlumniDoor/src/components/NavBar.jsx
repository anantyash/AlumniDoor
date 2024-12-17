import React from "react";
import logo from "../assets/logo2.png";
import Button from "@mui/material/Button";

function NavBar() {
  return (
    <div className="h-fit w-full m-0 p-0">
      <div className=" w-auto   flex items-center justify-between px-5 py-1"> {/*bg-green-300*/}
        <div className="w-fit rounded-3xl flex-initial pt-2">
          <img src={logo} alt="" srcset="" className="max-w-72" />
        </div>
        <nav className=" w-1/2">
          <ul className="flex justify-evenly  font-bold list-none">
            <li>
              <Button variant="text" className="text-green-500 hover:bg-green-100 font-semibold">
                Home
              </Button>
            </li>
            <li>
              <Button variant="text" className="text-green-500 hover:bg-green-100 font-semibold">
                People
              </Button>
            </li>
            <li>
              <Button variant="text" className="text-green-500 hover:bg-green-100 font-semibold">
                Door
              </Button>
            </li>
            <li>
              <Button variant="text" className="text-green-500 hover:bg-green-100 font-semibold">
                College
              </Button>
            </li>
            <li>
              <Button variant="text" className="text-green-500 hover:bg-green-100 font-semibold">
                Dashboard
              </Button>
            </li>
          </ul>
        </nav>
        <div className="just">
          <Button className="text-slate-50 bg-green-600 font-semibold hover:bg-green-400" variant="contained">
            SignUp / Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
