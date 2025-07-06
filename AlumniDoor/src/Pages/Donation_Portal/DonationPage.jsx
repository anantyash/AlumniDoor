import React, { useEffect, useState } from "react";

import { ALUMNIDOOR18 } from "../../assets/Images";

import { NavLink, useNavigate, useParams } from "react-router-dom";

import { Button, Divider } from "@mui/material";
import { ProfileCard } from "../../components";
import dbService from "../../services/AD_DB/userDB";
import { useUser } from "../../context/UserContext";

function DonationPage() {
  const { userid } = useParams();
  const [donarAcc, setDonarAcc] = useState();
  const { users } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDonarAccount = async () => {
      const data = await dbService.getAllUser(userid);
      // console.log("Recevied Data ", data);
      setDonarAcc(data); // store users for Donor Wall
    };

    fetchDonarAccount();
  }, []);

  console.log("Users:", users);

  const navigateDonate = (role, mentor) => {
    // console.log("Role:", role);
    // console.log("Mentor:", mentor);

    // here we are checking both because at the backend we are mentor user type is also alumni and we there is separate field for mentor so we need to check both

    if (role !== "Alumni" || mentor === true) {
      navigate("error/", { state: { from: "Donation Page" } });
    } else {
      navigate("payment/");
    }
  };
  return (
    <div className="bg-neutral-100">
      <div className="flex flex-col h-fit md:flex-row-reverse justify-evenly  p-5 gap-20">
        <div className="w-[70vh] self-center md:h-[400px]">
          <img
            src={ALUMNIDOOR18}
            alt="Donation Image"
            className="w-full h-auto self-center"
          />
        </div>

        <div className="w-[70%] md:w-[45%] h-full flex flex-col gap-7 md:ml-20 self-center">
          <div className=" h-fit w-full flex flex-wrap flex-col gap-6 self-center p-10 rounded-lg bg-white drop-shadow-lg">
            <h3 className="text-4xl">Giving Back, Shaping Futures.</h3>
            <p className="text-lg font-sans">
              Empower futures and strengthen our legacy support students and
              alumni through your generous contributions.
            </p>

            {/* Button */}
            <div className="flex flex-col md:flex-row gap-3 ">
              <Button
                variant="contained"
                onClick={() =>
                  navigateDonate(
                    // This is done because context is storing array of objects and we can't access userType and mentor directly, so it need to find the user then we can access the fields
                    users.find((u) => u.id === userid)?.userType,
                    users.find((u) => u.id === userid)?.mentor
                  )
                }
                className=" text-white bg-greenColor font-semibold border-greenColor border-solid border-[1px] hover:text-greenColor hover:bg-greenBgColor hover:transition-all ease-in-out hover:duration-500"
              >
                Make a Donation
              </Button>

              <NavLink>
                <Button
                  variant="contained"
                  className=" w-full md:w-auto text-blue-600 bg-white hover:bg-blue-600 border-blue-600 font-semibold border-solid border-[1px] hover:text-white hover:transition-all ease-in-out hover:duration-500"
                >
                  Learn More
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <Divider className="mb-8 w-[90%] justify-self-center" />
      <div className="bg-white w-[80%] justify-self-center p-5 flex flex-col items-center rounded-lg">
        <div className="w-full h-fit pt-5 pb-10 flex flex-col items-center gap-6 text-2xl font-sans">
          <h2>Donar Wall</h2>
          <Divider className="bg-black self-center w-[30%]" flexItem />
        </div>
        <div className="justify-self-center bg-white w-[100%] rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4">
          {donarAcc
            ? donarAcc
                .slice(0, 9)
                .map((acc) => <ProfileCard user={acc} donateAmt="100" />)
            : null}

          {/* at above we are using .slice(0, 9) it limits the number of displayed donor profiles to 9 */}
        </div>
      </div>
    </div>
  );
}

export default DonationPage;
