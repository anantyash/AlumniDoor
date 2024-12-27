import React from "react";
import NavBar from "../components/NavBar";
import donationimg from "../assets/donationimg.png";
import { Link } from "react-router-dom";

import { Button, Card, CardContent } from "@mui/material";

function DonationPage() {
  return (
    <>

      <div className="flex bg-green-100 py-6">
        <div className="flex md:flex-row-reverse bg-green-200 py-6">
          <div className="w-3/5 bg-green-300">
            <img src={donationimg} alt="" className="w-full h-auto" />
          </div>

          <div className=" flex flex-col justify-around bg-green-300 p-10 pl-20 ">
            <h3 className="text-4xl">Giving Back, Shaping Futures.</h3>
            <p className="text-lg font-sans">
              Empower futures and strengthen our legacy—support students and
              alumni through your generous contributions.
            </p>

            {/* Button */}
            <div className="flex gap-3">
              <Link className="nounderline">
                <Button
                  variant="outlined"
                  className="underline bg-green-400 text-black font-semibold border-green-700 hover:text-white hover:bg-green-700 border-solid border-2"
                >
                  Make a Donation
                </Button>
              </Link>
              <Link>
                <Button
                  variant="outlined"
                  className="underline bg-green-400 text-black font-semibold border-green-700 hover:text-white hover:bg-green-700 border-solid border-2"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start pt-3 pl-20 gap-3">
        <Card
          className="w-fit font-sans bg-green-400 text-center border-green-700 border-solid border-2"
          variant="outlined"
        >
          <CardContent>
            <h3 className="py-2">Funds Raised So Far</h3>
            <p>$ 0</p>
          </CardContent>
        </Card>
        <Card
          className="w-fit font-sans bg-green-400 text-center border-green-700 border-solid border-2"
          variant=""
        >
          <CardContent>
            <h3 className="py-2">Projects Supported</h3>
            <p> 0</p>
          </CardContent>
        </Card>
        <Card
          className="w-fit font-sans bg-green-400 text-center border-green-700 border-solid border-2"
          variant=""
        >
          <CardContent>
            <h3 className="py-2">Students Benefited</h3>
            <p> 0</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default DonationPage;
