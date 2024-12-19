import React, { useState } from "react";
import bgimg from "../assets/bgimg.png";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";


function SignUp() {
  const [checked, setChecked] = useState("");
  const [isselect, setIsSelect] = useState('false')
  return (
    <div className="w-full h-auto flex justify-center px-16 py-10">
      <div className="w-4/5 flex justify-center ">
        <div className="flex flex-col text-center  w-fit drop-shadow-2xl shadow-lg p-5 rounded-2xl bg-green-200">
          <h1>Sign Up</h1>
          <form className="w-fit flex flex-col p-5 self-center gap-6">
            <div className="flex self-center gap-10">
              <fieldset className="inline-block border-none font-semibold">
              <input
                id="alumni-radio"
                type="radio"
                name="id"
                value={isselect}
                onChange={() => {
                  setIsSelect('alumni');
                }}
                className="pt-2"
              />
              <label htmlFor="alumni-radio" className="font-sans px-1">
                Alumni
              </label>

              </fieldset>
              <fieldset className="inline-block border-none font-semibold">
              <input
                id="student-radio"
                type="radio"
                name="id"
                value={isselect}
                onChange={() => {
                  setIsSelect('student');
                }}
               
              />
              <label htmlFor="student-radio" className="font-sans px-1">
                Student
              </label>

              </fieldset>
            
            </div>
            <TextField
              id="fullname"
              label="Full Name"
              variant="outlined"
              size="small"
              color="success"
              required
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              size="small"
              color="success"
              required
            />
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              size="small"
              color="success"
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              type="password"
              size="small"
              color="success"
            />
            <div>
              <input
                id="terms"
                type="checkbox"
                value={checked}
                onChange={(e) => {
                  setChecked(e.target.value);
                }}
                className="pt-2"
              />
              <label htmlFor="terms" className="font-sans text-sm px-1">
                I agree with the Terms & Condition of Clarity
              </label>
            </div>
            <Button type="submit" variant="contained" className="bg-green-600 hover:bg-green-500">Create account</Button>
          </form>
          <p className="">Already have an account? <Link to='/login'>LogIn</Link></p> 
        </div>
        <div //Img Container
          className="w-1/2 h-auto self-center bg-green-300 pb-14 rounded-r-2xl"
        >
          <img src={bgimg} alt="img" className="w-full h-auto " />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
