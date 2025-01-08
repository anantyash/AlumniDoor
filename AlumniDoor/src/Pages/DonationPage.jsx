import React from "react";
import NavBar from "../components/NavBar";
import donationimg from "../assets/donationimg.png";
import { Link } from "react-router-dom";

import { Button, Card, CardContent } from "@mui/material";

function DonationPage() {
  return (
    <>
      <div className="flex md:flex-row-reverse  py-6">
        <div className="w-3/5 ">
          <img src={donationimg} alt="Donate Image" className="w-full h-auto" />
        </div>

        <div className=" flex flex-col justify-around p-10 pl-20 ">
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
                className="underline text-yellow-600 font-semibold border-yellow-600 hover:text-black hover:bg-yellow-300 border-solid border-2"
              >
                Make a Donation
              </Button>
            </Link>
            <Link>
              <Button
                variant="outlined"
                className="underline text-black font-semibold border-greenColor hover:text-white hover:bg-greenTextColor border-solid border-2"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-start pt-3 pl-20 gap-3">
        <Card
          className="w-fit font-sans bg-orange-300 text-center border-orange-700 border-solid border-2"
          variant="outlined"
        >
          <CardContent className="text-white ">
            <h3 className="py-2 ">Funds Raised So Far</h3>
            <p>$ 0</p>
          </CardContent>
        </Card>
        <Card
          className="w-fit font-sans bg-yellow-300 text-center border-yellow-600 border-solid border-2"
          variant=""
        >
          <CardContent>
            <h3 className="py-2">Projects Supported</h3>
            <p> 0</p>
          </CardContent>
        </Card>
        <Card
          className="w-fit font-sans bg-purple-100 text-center text-purple-700 border-purple-700 border-solid border-2"
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
