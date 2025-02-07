import React, { useState } from "react";
import { ALUMNIDOOR6, logoIcon } from "../../assets/Images";
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Divider,
  Checkbox,
  FormGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import { ArrowBackIcon } from "../../assets/iconIndex";
import { useNavigate } from "react-router-dom";

function Payment_Gateway() {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-100 p-5">
      <Button
        variant="contained"
        className="bg-greenColor h-fit flex justify-self-end capitalize mb-4 sticky top-28 z-30 rounded-s"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
      >
        Back / Donation-Portal
      </Button>
      <div id="top" className="flex sm:flex-row justify-around font-sans  p-2">
        <div //Payment Options
          className="gap-10 w-[45%] flex flex-col bg-white rounded-lg drop-shadow-xl p-5 py-10"
        >
          <div className=" flex flex-col gap-4">
            <h2 className="font-semibold self-center">
              Choose Payment Options
            </h2>
            <Divider className=" w-[70%] self-center bg-neutral-200" flexItem />
          </div>
          <Card // UPI
            className="w-[80%] self-center outline outline-1 justify-self-center text-2xl sm:justify-normal p-4 shadow-none rounded-lg"
          >
            <CardContent className="flex flex-col gap-2">
              <div className="pb-4 flex flex-col gap-5 items-center">
                <span className="md:text-xl">UPI Payment</span>
                {/* <Divider
                className="bg-neutral-200 self-center w-[80%]"
                flexItem
              /> */}
              </div>

              <form action=" #top">
                <div className="mb-4">
                  <TextField fullWidth label="Ammount" variant="outlined" />
                </div>
                <div className="mb-4">
                  <TextField label="UPI ID" variant="outlined" fullWidth />
                </div>
                <div className="mb-4">
                  <FormGroup>
                    <FormControlLabel
                      label="Anonymous Donation "
                      control={<Checkbox />}
                    />
                  </FormGroup>
                  {/* <Checkbox label="Anonymous Donation " /> */}
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="w-full font-semibold"
                >
                  Pay Now
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* <Divider variant="middle" className="w-[80%] self-center" /> */}

          <Card // Credit/Debit Card
            className="w-[80%] p-4 outline outline-1 justify-self-center self-center rounded-lg shadow-none text-xl"
          >
            <CardContent className=" flex flex-col gap-2">
              <div className=" pb-4 flex flex-col gap-5 items-center ">
                <span> Card Payment </span>
                {/* <Divider
                className="bg-neutral-200 self-center w-[80%] "
                flexItem
              /> */}
              </div>

              <form>
                <div className="mb-4">
                  <TextField fullWidth label="Ammount" variant="outlined" />
                </div>
                <div className="mb-4">
                  <TextField fullWidth label="Card Number" variant="outlined" />
                </div>
                <div className="mb-4">
                  <TextField
                    fullWidth
                    label="Card Holder Name"
                    variant="outlined"
                  />
                </div>
                <div className="mb-4 flex space-x-4">
                  <TextField
                    label="Expiry Date"
                    variant="outlined"
                    className="w-1/2"
                  />
                  <TextField label="CVV" variant="outlined" className="w-1/2" />
                </div>
                <div className="mb-4">
                  <FormGroup>
                    <FormControlLabel
                      label="Anonymous Donation "
                      control={<Checkbox />}
                    />
                  </FormGroup>
                  {/* <Checkbox label="Anonymous Donation " /> */}
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="w-full font-semibold"
                >
                  Pay Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="w-[40%] h-fit flex flex-col items-center gap-4  rounded-lg py-8 px-5">
          <h2 className="p-6 pb-7 self-center drop-shadow-sm rounded-lg bg-white text-greenColor">
            Support the Future of Our Alma Mater
          </h2>
          <div className="w-[90%] mb-3">
            <img
              src={ALUMNIDOOR6}
              alt="IMG"
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="flex w-[80%] outline outline-1 rounded-lg gap-2 items-center py-2 px-5 bg-white drop-shadow-lg">
            <img src={logoIcon} alt="Logo" className="h-auto w-[20%]" />
            <p className="flex flex-col gap-2">
              <q className="font-semibold text-wrap text-center">
                Your contributions help us continue to grow, innovate, and
                provide opportunities for the next generation.
              </q>
              <span className="text-end"> - Team AlumniDoor</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment_Gateway;
