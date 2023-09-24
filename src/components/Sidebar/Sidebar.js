import React from "react";
import { Link } from 'react-router-dom'
import SidebarMenuBtn from "./SidebarMenuBtn";

const Sidebar = () => {
  const sidebarMenuItems = [
    { text: "@ Top", link: "/" },
    { text: "@ Saved", link: "/" },
    { text: "@ Settings", link: "/" },
    { text: "@ Other menu 1", link: "/" },
    { text: "@ Other menu 2", link: "/" },
    { text: "@ Other menu 3", link: "/" },
  ];

  return (
    <aside className="flex flex-col h-full p-4 w-64 bg-gray-200 justify-between">
      <div>
        {/* Create thread button */}
        <Link to="/create-thread">
          <button className="btn-primary w-full mb-4">
            スレッドを立てる
          </button>
        </Link>
        {/* Sidebar menu */}
        <ul className="space-y-2">
          {sidebarMenuItems.map((item, index) => (
            <li key={index}>
              <SidebarMenuBtn text={item.text} link={item.link} />
            </li>
          ))}
        </ul>
      </div>
      {/* Copyright */}
      <div className="py-4 px-2 text-sm text-gray-400">
        Copyright &copy; 2023
      </div>
    </aside>
  );
};

export default Sidebar;