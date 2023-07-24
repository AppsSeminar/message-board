import React from 'react';
import './styles.css';

const TabBtn = ({ text, isActive, onClick }) => {
    const buttonStyle = isActive ? 'tab-btn-active' : 'tab-btn-inactive';

    return (
        <button className={`tab-btn-base ${buttonStyle}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default TabBtn;