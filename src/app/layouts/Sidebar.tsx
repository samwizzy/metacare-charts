/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { Stack } from "@mui/material";
import { menus } from "./data/menus";
import { css, SerializedStyles } from "@emotion/react";
import { useTheme } from "@mui/material";

const useStyles = (): SerializedStyles => {
  const theme = useTheme();

  return css`
    .link {
      &:hover {
        color: ${theme.palette.secondary.main};
      }
      &:active {
        color: ${theme.palette.secondary.dark};
      }
      &:focus {
        color: ${theme.palette.secondary.dark};
      }
    }
  `;
};

function Sidebar() {
  const styles = useStyles();
  const [menuLists, setMenuLists] = useState(menus);

  const handleClick = (menuId: number) => {
    const tempMenus = [...menuLists];
    const index = tempMenus.findIndex((menu) => menu.id === menuId);
    tempMenus[index].open = !tempMenus[index].open;

    setMenuLists(tempMenus);
  };

  return (
    <div className="min-h-screen w-64 max-w-md border-r sm:block hidden">
      <div className="border m-2 px-8 py-4 bg-gray-50 rounded-sm">
        <span className="text-gray-800 text-base block">Metacare</span>
        <span className="text-gray-600 text-xs">adeyinka@metacare.app</span>
      </div>

      <nav className="text-sm text-gray-600" css={styles}>
        <ul>
          {menuLists.map((menu) => {
            if (!menu.subMenus.length) {
              return (
                <li key={menu.id}>
                  <button
                    className="w-full flex justify-between items-center py-3 px-4 link"
                    onClick={() => handleClick(menu.id)}
                  >
                    <Stack alignItems="center" direction="row">
                      <menu.icon size={16} className="shrink-0 mr-2" />
                      <span>{menu.name}</span>
                    </Stack>

                    {menu.open ? (
                      <HiOutlineChevronDown size={16} className="shrink-0" />
                    ) : (
                      <HiOutlineChevronUp size={16} className="shrink-0" />
                    )}
                  </button>
                </li>
              );
            } else {
              return (
                <li key={menu.id}>
                  <button
                    className="w-full flex justify-between items-center py-3 px-4 link"
                    onClick={() => handleClick(menu.id)}
                  >
                    <Stack alignItems="center" direction="row">
                      <menu.icon size={16} className="shrink-0 mr-2" />
                      <span>{menu.name}</span>
                    </Stack>

                    {menu.open ? (
                      <HiOutlineChevronDown size={16} className="shrink-0" />
                    ) : (
                      <HiOutlineChevronUp size={16} className="shrink-0" />
                    )}
                  </button>
                  {menu.open && (
                    <ul className="pl-6 transition-all duration-500">
                      {menu.subMenus.map((subMenu) => (
                        <li key={subMenu.id}>
                          <Link to="/" className="flex items-center py-3 px-4">
                            <span>{subMenu.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
