"use client";

import Button from "../../utilities/Button";

const InputSearch = () => {
  return (
    <div className="h-[200px] lg:h-[400px] content-center">
      <div className="container w-full flex justify-center m-auto">
        <div className="">
          <input placeholder="Cari Lowongan.." className="p-3 rounded border-2 w-[400px]" />
        </div>
        <Button name={"Search"} link={"/"} />
      </div>
    </div>
  );
};

export default InputSearch;
