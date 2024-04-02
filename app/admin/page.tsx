import React from "react";
import Header from "./home/components/header/Header";
import Dashboard from "./home/components/dashboard/Dashboard";
import SearchBar from "./home/components/search/SearchBar";

export default function AdminHome() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white">
      <Header />
      <Dashboard />
      <SearchBar />
    </div>
  );
}
