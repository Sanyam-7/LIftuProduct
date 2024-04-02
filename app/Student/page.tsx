"use client"
import React, { useState } from "react";
import Sidebar from "@/app/components/student/Sidebar"
import Sidebar1 from "@/app/components/student/Sidebar1";
import Content from "@/app/components/student/Content";
import Profile from "@/app/components/student/Profile";

const Page: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  return (
    <div className="flex">
        {isSidebarVisible ? <Sidebar /> : <Sidebar1 toggleSidebar={toggleSidebar} />}
        <Content></Content>
        <Profile></Profile>
    </div>
  );
};

export default Page;