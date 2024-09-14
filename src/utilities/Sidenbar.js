"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiUser, HiViewBoards } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const SidebarTemplate = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <div className="absolute top-12 mt-2 h-screen shadow-xl bg-white">
      <div>
        <Sidebar aria-label="Default sidebar" className="w-[180px] lg:w-[300px] lg:text-xl">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item className="lg:p-4" href="/dashboard" icon={HiChartPie} active>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item className="lg:p-4" href="/dashboard/Data" icon={HiShoppingBag}>
                Data Vacancy
              </Sidebar.Item>
              <Sidebar.Item className="lg:p-4" href="/dashboard/CreateData" icon={HiShoppingBag}>
                Create Data
              </Sidebar.Item>
              <Sidebar.Item className="lg:p-4" href="#" icon={HiUser}>
                Profil
              </Sidebar.Item>
              <Sidebar.Item className="lg:p-4" href="#" icon={HiViewBoards}>
                Change Password
              </Sidebar.Item>
              <Sidebar.Item className="lg:p-4" href="#" icon={HiArrowSmRight} onClick={handleLogout}>
                Log Out
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default SidebarTemplate;
