import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function Loader(): JSX.Element {
  return (
    <div className="h-screen w-full flex justify-center items-center space-x-2">
      <CircularProgress size={28} color="primary" />
      <div className="text-lg text-primary-main font-bold">Loading...</div>
    </div>
  );
}

export default Loader;
