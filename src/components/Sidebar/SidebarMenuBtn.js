import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

const SidebarMenuBtn = ({ text, link }) => {
  return (
    <Link to={link}>
      <button className="sidebar-btn-secondary">
        {text}
      </button>
    </Link >
  );
};

export default SidebarMenuBtn;
