import { Divider } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-center gap-8 h-fit w-full bg-neutral-100">

      <Divider className="py-2 mx-16" variant="middle" flexItem/>
      <p className=" self-center w-fit  text-zinc-400 pb-5">
        © 2024 AlumniDoor. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
