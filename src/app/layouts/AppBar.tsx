import * as React from "react";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import { FiSearch, FiBell } from "react-icons/fi";
import AccountMenu from "../components/AccountMenu";

function AppBar() {
  return (
    <div className="sm:flex block justify-between items-center border px-4 py-1.5">
      <form className="flex border sm:w-96 w-full rounded-md overflow-hidden bg-gray-100 sm:mb-0 mb-4">
        <input
          type="text"
          placeholder="Ask us any question"
          className="bg-none text-sm py-2 px-3 placeholder-gray-500 focus:outline-none flex-1"
        />
        <button className="bg-transparent border-0 px-2">
          <FiSearch size={18} className="text-gray-600" />
        </button>
      </form>

      <Stack direction="row" alignItems="center" spacing={4}>
        <Badge badgeContent={4} color="error">
          <FiBell size={16} className="text-gray-600" />
        </Badge>

        <AccountMenu />
      </Stack>
    </div>
  );
}

export default AppBar;
