import { useEffect, useState } from "react";
import Header from "../utilities/Header";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SidebarTemplate from "../utilities/Sidenbar";
import { Avatar } from "flowbite-react";

const Navbar = () => {
  const [isDashboard, setIsDashboard] = useState(false);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    setIsDashboard(window.location.pathname.startsWith("/dashboard"));
  }, []);
  return (
    <>
      <div className="w-full fixed top-0 bg-white">
        <div className="container m-auto">
          <div className={`${toggle ? `${isDashboard ? "hidden lg:block z-50" : "hidden"}` : ""}`}>
            <SidebarTemplate />
          </div>

          <div className={`${isDashboard ? "justify-normal" : "justify-between"} w-full flex p-2 lg:p-3 items-center `}>
            <div className={`${toggle ? " p-4 mt-2 lg:hidden" : "p-4 mt-2 w-[240px] lg:w-[320px] text-right"} items-center ${isDashboard ? "" : "hidden"}`}>
              <button type="button" className="" onClick={() => setToggle(toggle ? false : true)}>
                <span className="content-center items-center">{toggle ? <AiOutlineMenu className="w-5 h-5" /> : <AiOutlineClose className="w-5 h-5" />}</span>
              </button>
            </div>

            <div className={`${toggle ? `` : `${isDashboard ? "absolute" : ""}`}  text-2xl font-bold uppercase`}>
              <a href="/"> Worked</a>
            </div>

            <div className={`${isDashboard ? " hidden" : "lg:w-full"}`}>
              <Header />
            </div>

            <div className={`${isDashboard ? "px-2 w-full flex justify-end items-center" : "hidden"}`}>
              <h3 className="px-2">Mohammad Farras Daffauzan</h3>
              <Avatar img="https://tse1.mm.bing.net/th?id=OIP.7NckrRRwsQZ1y0DGjj9VKgHaHa&pid=Api&P=0&h=220" alt="avatar of Jese" rounded className="w-10 h-10 border-2 rounded-full border-black" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
