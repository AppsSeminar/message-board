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
    <aside className="bg-gray-200 p-4 w-1/6 flex flex-col justify-between">
      <div>
        {/* Create thread */}
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
      <div className="py-4 px-2 text-sm text-gray-500">
        Copyright &copy; 2023
      </div>
    </aside>
  );
};

export default Sidebar;