import React from 'react';
import Tabbar from './Tabbar/Tabbar';
import ThreadList from "./ThreadList";

const Top = () => {
    return (
        <div className="p-4">
            <Tabbar />
            <ThreadList />
        </div>
    )
}

export default Top;