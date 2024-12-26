import React from "react";
import back from "../images/back.png";
import login from "../images/login.png";
import search from "../images/search.png";
import menu from "../images/menu.png";

export function NavigationBar() {
  return (
    <div className="flex gap-10 items-center">
      <img
        loading="lazy"
        src={back}
        className="object-contain shrink-0 w-[30px] h-[30px]"
        alt="Back Icon"
      />
      <img
        loading="lazy"
        src={login}
        className="object-contain shrink-0 w-[30px] h-[30px]"
        alt="Login Icon"
      />
      <img
        loading="lazy"
        src={search}
        className="object-contain shrink-0 w-[30px] h-[30px]"
        alt="Search Icon"
      />
      <img
        loading="lazy"
        src={menu}
        className="object-contain shrink-0 w-[30px] h-[30px]"
        alt="Menu Icon"
      />
    </div>
  );
}
