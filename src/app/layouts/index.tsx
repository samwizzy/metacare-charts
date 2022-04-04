import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "src/app/layouts/Sidebar";
import AppBar from "src/app/layouts/AppBar";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1">
        <AppBar />

        <div className="py-3">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
