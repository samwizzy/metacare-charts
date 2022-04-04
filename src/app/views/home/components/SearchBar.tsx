import React from "react";
import { MenuItem } from "@mui/material";
import MuiSelect from "src/app/components/MuiSelect";
import Button from "src/app/components/Button";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="sm:flex block justify-between px-4 py-3">
      <h4 className="text-gray-800 font-bold capitalize sm:mb-0 mb-4 mr-6">
        Efficiency Analytics
      </h4>

      <div>
        <form className="sm:flex block items-center sm:space-x-4">
          <div className="flex border sm:w-80 w-full rounded-md overflow-hidden bg-gray-100 sm:mb-0 mb-3">
            <button className="bg-transparent border-0 px-2">
              <FiSearch size={18} className="text-gray-600" />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="bg-none text-sm py-2 px-3 placeholder-gray-500 focus:outline-none flex-1"
            />
          </div>

          <MuiSelect className="sm:mb-0 mb-3">
            <MenuItem value={10}>January</MenuItem>
            <MenuItem value={20}>February</MenuItem>
            <MenuItem value={30}>March</MenuItem>
          </MuiSelect>

          <Button>Export</Button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
