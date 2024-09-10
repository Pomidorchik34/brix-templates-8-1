import React, { useEffect } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import language from "../lang.json";
import { useState } from "react";
function Header() {
  useEffect(() => {
    localStorage.getItem("mode") &&
      document
        .querySelector("html")
        .setAttribute("data-theme", localStorage.getItem("mode"));
  }, []);

  const [lang, setLang] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"));
    }
  }, []);
  return (
    <nav className="px-[98px] flex items-center justify-between h-[126.43px]">
      <img src={logo} alt="" />
      <ul className="menu menu-horizontal px-1 flex gap-4">
        <li>
          <select
            className="select select-ghost w-[88px] rounded-[50px] border-solid	border-[1.7px] border-[#4a3aff]"
            onChange={(e) => {
              localStorage.setItem("lang", e.target.value);
              if (e.target.value == 0) {
                localStorage.setItem("lang2", "EN");
              } else if (e.target.value == 1) {
                localStorage.setItem("lang2", "RU");
              } else if (e.target.value == 2) {
                localStorage.setItem("lang2", "UZ");
              }
              console.log(e.target.value);
              setInterval(() => {
                location.reload();
              }, [300]);
            }}
          >
            <option value="0">EN</option>
            <option value="1">RU</option>
            <option value="2">UZ</option>
          </select>
        </li>
        <li className="item">
          <Link className="nav-btn" to="/">
            {language[lang].navbar[0]}
          </Link>
        </li>
        <li className="item">
          <Link className="nav-btn" to="/products">
            {language[lang].navbar[1]}
          </Link>
        </li>
        <li className="item">
          <Link className="nav-btn" to="/cart">
            {language[lang].navbar[2]}
          </Link>
        </li>
      </ul>
      <button
        className="btn-def bg-def-blue"
        onClick={() => {
          if (
            document.querySelector("html").getAttribute("data-theme") == "light"
          ) {
            document.querySelector("html").setAttribute("data-theme", "black");
            localStorage.setItem("mode", "black");
          } else {
            document.querySelector("html").setAttribute("data-theme", "light");
            localStorage.setItem("mode", "light");
          }
        }}
      >
        {language[lang].navbar[3]}
      </button>
    </nav>
  );
}

export default Header;
