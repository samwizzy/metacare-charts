import React from "react";
import { Link } from "react-router-dom";
import { RiGroupLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import {
  IoCheckboxOutline,
  IoCalendarClearOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Stack } from "@mui/material";

function Sidebar() {
  return (
    <div className="h-screen w-64 max-w-md border sm:block hidden">
      <div className="border m-2 px-8 py-4 bg-gray-50 rounded-sm">
        <span className="text-gray-800 text-sm block">Metacare</span>
        <span className="text-gray-600 text-xs">adeyinka@metacare.app</span>
      </div>

      <nav className="text-sm text-gray-600">
        <ul>
          <li>
            <button className="w-full flex justify-between items-center py-3 px-4">
              <Stack alignItems="center" direction="row">
                <RiGroupLine size={16} className="shrink-0 mr-2" />
                <span>Admin</span>
              </Stack>

              <HiOutlineChevronDown size={16} className="shrink-0" />
            </button>
          </li>
          <li>
            <button className="w-full flex justify-between items-center py-3 px-4">
              <Stack alignItems="center" direction="row">
                <IoCheckboxOutline size={16} className="shrink-0 mr-2" />
                <span>Knowledge Base</span>
              </Stack>

              <HiOutlineChevronDown size={16} className="shrink-0" />
            </button>
          </li>
          <li>
            <button className="w-full flex justify-between items-center py-3 px-4">
              <Stack alignItems="center" direction="row">
                <IoCheckboxOutline size={16} className="shrink-0 mr-2" />
                <span>Train SAM</span>
              </Stack>

              <HiOutlineChevronDown size={16} className="shrink-0" />
            </button>
          </li>
          <li>
            <button className="w-full flex justify-between items-center py-3 px-4">
              <Stack alignItems="center" direction="row">
                <IoCalendarClearOutline size={16} className="shrink-0 mr-2" />
                <span>Agent Inbox</span>
              </Stack>

              <HiOutlineChevronDown size={16} className="shrink-0" />
            </button>
          </li>
          <li>
            <button className="w-full flex justify-between items-center py-3 px-4">
              <Stack alignItems="center" direction="row">
                <FiClock size={16} className="shrink-0 mr-2" />
                <span>Help Center</span>
              </Stack>
              <HiOutlineChevronDown size={16} className="shrink-0" />
            </button>
          </li>
          <li className="relative">
            <button className="w-full flex justify-between items-center cursor-pointer bg-none py-3 px-4">
              <Stack alignItems="center" direction="row">
                <IoChatbubbleEllipsesOutline
                  size={16}
                  className="shrink-0 mr-2"
                />
                <span>Analytics</span>
              </Stack>
              <HiOutlineChevronDown size={16} className="shrink-0" />
            </button>
            <ul className="dropdown pl-6">
              <li>
                <Link to="/" className="flex items-center py-3 px-4">
                  <span>Teams</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center py-3 px-4">
                  <span>Knowledge Base</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center py-3 px-4">
                  <span>Training SAM</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center py-3 px-4">
                  <span>Help Center</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
