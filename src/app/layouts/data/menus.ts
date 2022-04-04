import {
  IoCheckboxOutline,
  IoCalendarClearOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";

export const menus = [
  { id: 1, name: "Admin", icon: RiGroupLine, open: false, subMenus: [] },
  {
    id: 2,
    name: "Knowledge Base",
    icon: IoCheckboxOutline,
    open: false,
    subMenus: [],
  },
  {
    id: 3,
    name: "Train SAM",
    icon: IoCheckboxOutline,
    open: false,
    subMenus: [],
  },
  {
    id: 4,
    name: "Agent Inbox",
    icon: IoCalendarClearOutline,
    open: false,
    subMenus: [],
  },
  { id: 5, name: "Help Center", icon: FiClock, open: false, subMenus: [] },
  {
    id: 6,
    name: "Analytics",
    icon: IoChatbubbleEllipsesOutline,
    open: false,
    subMenus: [
      { id: 10, name: "Team" },
      { id: 20, name: "Knowledge Base" },
      { id: 30, name: "Training SAM" },
      { id: 40, name: "Help Center" },
    ],
  },
];
