import React from "react";

export function FooterSection({ title, links }) {
  return (
    <div className="flex flex-col items-start text-xl text-black max-md:mt-10">
      <div className="self-stretch text-2xl">{title}</div>
      {links.map((link, index) => (
        <div key={index} className={`${index === 0 ? "mt-8" : "mt-3.5"}`}>
          {link}
        </div>
      ))}
    </div>
  );
}
