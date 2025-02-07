import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  IconButton,
} from "@mui/material";
import {
  skills,
  profession,
  courses,
  startYear,
  endYear,
} from "../../components/Data"; // Assuming these are defined in your Data file
import { FilterCheckbox, ProfileCard } from "../../components";
import { FaFilter } from "react-icons/fa";
import { ArrowBackIcon, SearchIcon } from "../../assets/iconIndex";
import { useNavigate, useSearchParams } from "react-router-dom";

const availability = [" Available", "Not Available"];
const length = 10;

const Mentors = () => {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [selectedAvailability, setSelectedAvailability] = useState(null);
  const [selectedGraduationYear, setSelectedGraduationYear] = useState(null);
  const [selectedDegree, setSelectedDegree] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    // Read search parameters and set initial state
    const skillsParam = searchParam.get("skills")
      ? searchParam.get("skills").split(",")
      : [];
    const professionParam = searchParam.get("profession") || null;
    const availabilityParam = searchParam.get("availability") || null;
    const graduationYearParam = searchParam.get("graduationYear") || null;
    const degreeParam = searchParam.get("degree") || null;
    const searchTermParam = searchParam.get("search") || null;

    skillsParam ? setSelectedSkills(skillsParam) : null;
    professionParam ? setSelectedProfession(professionParam) : null;
    availabilityParam ? setSelectedAvailability(availabilityParam) : null;
    graduationYearParam ? setSelectedGraduationYear(graduationYearParam) : null;
    degreeParam ? setSelectedDegree(degreeParam) : null;
    searchTermParam ? setSearchTerm(searchTermParam) : null;
  }, [searchTerm]);

  const handleFilter = () => {
    // Update search parameters based on selected filters
    const params = new URLSearchParams();
    if (searchTerm) {
      params.set("search", searchTerm);
    }
    if (selectedSkills.length) {
      params.set("skills", selectedSkills.join(","));
    }
    if (selectedProfession) {
      params.set("profession", selectedProfession);
    }
    if (selectedAvailability) {
      params.set("availability", selectedAvailability);
    }
    if (selectedGraduationYear) {
      params.set("graduationYear", selectedGraduationYear);
    }
    if (selectedDegree) {
      params.set("degree", selectedDegree);
    }

    setSearchParam(params);
  };

  return (
    <>
      <Divider className="md:top-24 sticky z-40" />
      <div className="p-5 bg-neutral-100">
        <Button
          variant="contained"
          className="bg-greenColor capitalize mb-4 sticky top-28 z-30 rounded-s"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
        >
          Back / Mentrorship Program
        </Button>
        <div className=" mb-5 p-5 w-[60%] justify-self-center  text-center bg-white rounded-lg drop-shadow-xl">
          <h2 className="text-3xl  font-semibold font-sans mb-5">
            Find Your Mentor
          </h2>
          <Divider className="w-72 bg-black justify-self-center" />
        </div>

        <div className=" flex gap-6 p-8 w-[90%] justify-self-center rounded-lg drop-shadow-xl ">
          <div //Apply Filters Section
            className="flex flex-col w-[30%] h-fit p-6 gap-3 bg-white rounded-lg  "
          >
            <div className="px-2 flex items-center gap-4 cursor-default text-greenColor">
              <FaFilter />
              <h3>Filters</h3>
            </div>
            <Divider className="mb-3" />

            <TextField
              className="text-base"
              placeholder="Find Your Mentor"
              color="success"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <IconButton className=" hover:bg-transparent -mr-2 w-fit">
                      <SearchIcon className="hover:bg-neutral-100 hover:shadow-md rounded-lg p-1" />
                    </IconButton>
                  ),
                },
              }}
            />

            <FilterCheckbox // Skills
              selectData={(data) => setSelectedSkills(data)}
              filterBy={skills}
              name={"Skills"}
            />

            <FilterCheckbox // Professions
              selectData={(data) => setSelectedProfession(data)}
              filterBy={profession}
              name={"Profession"}
            />

            <FilterCheckbox // Degree
              selectData={(data) => setSelectedDegree(data)}
              filterBy={courses}
              name={"Degree"}
            />

            <FormControl // Graduation Year
              variant="outlined"
              color="success"
              className="w-full"
            >
              <InputLabel id="graduation-year-label">
                Graduation Year
              </InputLabel>
              <Select
                labelId="graduation-year-label"
                value={selectedGraduationYear}
                onChange={(e) => setSelectedGraduationYear(e.target.value)}
                label="Graduation Year"
              >
                {Array.from({ length: endYear - startYear + 1 }, (_, index) => (
                  <MenuItem key={endYear - index} value={endYear - index}>
                    {endYear - index}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FilterCheckbox // Availability
              selectData={(data) => setSelectedAvailability(data)}
              filterBy={availability}
              name={"Availability"}
            />

            <Button
              variant="contained"
              className="bg-green-700 text-white mt-5"
              type="submit"
              onClick={handleFilter}
            >
              Apply Filters
            </Button>
            {/* </form> */}
          </div>

          <div //Filtered Mentors Section
            className=" w-[80%] p-6 gap-4 h-fit bg-white rounded-lg flex flex-wrap justify-evenly"
          >
            {/* {filteredMentors.map((mentor) => (
          <Card key={mentor.id} className="bg-white shadow-md">
            <CardContent>
              <Avatar className="mb-3" />
              <h3 className="text-xl font-semibold">{mentor.fullName}</h3>
              <p>{mentor.profession}</p>
              <p>{mentor.company}</p>
              <p>
                {mentor.degree} - {mentor.graduationYear}
              </p>
              <p>Skills: {mentor.skills.join(", ")}</p>
              <p>Availability: {mentor.availability}</p>
            </CardContent>
          </Card>
        ))} */}

            {Array.from({ length: length }, (_, index) => (
              <ProfileCard />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mentors;
