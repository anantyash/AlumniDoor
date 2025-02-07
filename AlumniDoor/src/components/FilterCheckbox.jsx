import React, { useState } from "react";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

function FilterCheckbox({ selectData, filterBy = [], name }) {
  const [selectedValue, setSelectedValue] = useState([]);
  const [length, setLength] = useState(5);

  selectData(selectedValue);

  return (
    <div className="flex flex-col p-3">
      <p className=" text-base font-semibold mb-2 font-sans">{`${name} :`}</p>
      <FormGroup>
        {filterBy // var
          .map((val) => (
            <FormControlLabel
              key={val}
              control={
                <Checkbox
                  className="transition-transform after:transition-transform duration-700 ease-in-out"
                  checked={selectedValue.includes(val)}
                  onChange={(e) => {
                    const { value } = e.target;
                    setSelectedValue((prev) =>
                      prev.includes(value)
                        ? prev.filter((data) => data !== value)
                        : [...prev, value]
                    );
                  }}
                  value={val}
                />
              }
              label={val}
            />
          ))
          .slice(0, length)}
      </FormGroup>
      {filterBy.length > 5 &&
        (length === 5 ? (
          <Button
            variant="text"
            className=" -ml-1 mt-1 w-fit capitalize hover:underline"
            onClick={() => setLength(filterBy.length)}
          >
            Show More
          </Button>
        ) : (
          <Button
            variant="text"
            className=" -ml-1 mt-1 w-fit capitalize hover:underline"
            onClick={() => setLength(5)}
          >
            Show Less
          </Button>
        ))}
    </div>
  );
}

export default FilterCheckbox;
