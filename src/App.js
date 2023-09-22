import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Top from "./components/Top/Top";
import ThreadDetail from "./components/ThreadDetail/ThreadDetail";
import CreateThread from "./components/CreateTheread/CreateThread";
import ContentsArea from "./components/ContentsArea";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app flex flex-col h-screen w-screen bg-gray-100">
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-1">
          {isSidebarOpen && <Sidebar />}
          <ContentsArea>
            <Routes>
              <Route exact path="/" element={<Top />} />
              <Route path="/threads/:id" element={<ThreadDetail />} />
              <Route path="/create-thread" element={<CreateThread />} />
            </Routes>
          </ContentsArea>
        </div>
      </div>
    </Router>
  );
};

export default App;