import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "src/app/layouts/Sidebar";
import AppBar from "src/app/layouts/AppBar";

function Layout() {
  return (
    <div className="w-full flex">
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati
        asperiores adipisci nobis repellendus eius, eveniet ipsum unde, dolorem
        totam nostrum, praesentium repudiandae harum iure ut facilis! Natus,
        sapiente expedita!
      </p> */}
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
