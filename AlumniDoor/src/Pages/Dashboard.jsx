import React from "react";
import NavBar from "../components/NavBar";
import networkimg from "../assets/networkimg.png";
import { Card, CardActionArea, CardContent } from "@mui/material";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <NavBar page="Dashboard" />
      <div //Container
        className="w-lvw  h-fit flex justify-center md:py-5 overflow-hidden"
      >
        <div className="grid md:grid-cols-2 w-5/6 justify-evenly py-5 md:p-10 text-center gap-5 md:gap-10 bg-green-300 rounded-lg">
          <div className=" h-36 border-4 border-green-800 border-solid rounded-xl ">
            <Card className="h-full flex text-center rounded-xl shadow-md elevation-4 ">
              <CardActionArea>
                <CardContent>
                  <h3 className=" text-2xl md:text-3xl text-brown">Networking Hub</h3>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className=" h-36 border-4 border-green-800 border-solid rounded-xl ">
            <Card className="h-full flex text-center rounded-xl shadow-md elevation-4">
              <CardActionArea>
                <CardContent>
                  <h3 className="text-2xl md:text-3xl text-brown">Mentorship Program</h3>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className=" h-36 border-4 border-green-800 border-solid rounded-xl">
            <Card className="h-full flex text-center rounded-xl shadow-md elevation-4">
              <CardActionArea>
                <CardContent>
                  <h3 className="text-2xl md:text-3xl text-brown">Donation Portal</h3>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className=" h-36 border-4 border-green-800 border-solid rounded-xl">
            <Card className="h-full flex text-center rounded-xl shadow-md elevation-4">
              <CardActionArea>
                <CardContent>
                  <h3 className="text-2xl md:text-3xl text-brown"> Support</h3>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Dashboard;
