import React, { useState } from 'react';
import TabbarBtn from './TabbarBtn';

const Tabbar = () => {
    const [activeTab, setActiveTab] = useState("Recent");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <ul className="flex mb-5 space-x-4">
            <TabbarBtn
                text="@ Recent"
                isActive={activeTab === 'Recent'}
                onClick={() => handleTabClick('Recent')}
            />
            <TabbarBtn
                text="@ Hot"
                isActive={activeTab === 'Hot'}
                onClick={() => handleTabClick('Hot')}
            />
            <TabbarBtn
                text="@ Ranking"
                isActive={activeTab === 'Ranking'}
                onClick={() => handleTabClick('Ranking')}
            />
        </ul >
    );
};

export default Tabbar;
