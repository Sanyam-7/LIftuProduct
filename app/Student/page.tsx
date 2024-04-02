"use client";
import React, { useState } from "react";
import Content from "../components/student/Content";
import Sidebar from "../components/student/Sidebar";
import Profile from "../components/student/Profile";
import Sidebar1 from "../components/student/Sidebar1";
const Page: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  return (
    <div className="flex">
      {isSidebarVisible ? (
        <Sidebar />
      ) : (
        <Sidebar1 toggleSidebar={toggleSidebar} />
      )}
      <Content></Content>
      <Profile></Profile>
    </div>
  );
};

export default Page;
