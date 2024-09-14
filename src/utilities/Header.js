import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");

    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <>
      <div className="flex mx-4 items-center lg:w-full lg:justify-between">
        <button type="button" onClick={() => setToggle(toggle ? false : true)}>
          <span className="content-center items-center lg:hidden">{toggle ? <AiOutlineMenu className="w-5 h-5" /> : <AiOutlineClose className="w-5 h-5" />}</span>
        </button>

        <div className={`${toggle ? "hidden lg:block lg:w-full" : "absolute right-8 top-9 bg-slate-50"}`}>
          <ul className="w-[150px] lg:flex lg:justify-between shadow-xl lg:shadow-none lg:border-none rounded-lg border-2">
            <li className=" p-2 text-center hover:underline lg:text-lg">
              <a href="/">Beranda</a>
            </li>
            <li className=" p-2 text-center hover:underline lg:text-lg">
              <a href="/lowongan">Lowongan</a>
            </li>

            <div className="block text-center lg:hidden">{isLoggedIn ? <Button onClick={handleLogout} name="Logout" /> : <Button link="/login" name="Login" />}</div>
          </ul>
        </div>

        <div className="hidden lg:block">{isLoggedIn ? <Button onClick={handleLogout} name="Logout" /> : <Button link="/login" name="Login" />}</div>
      </div>
    </>
  );
};

export default Header;
