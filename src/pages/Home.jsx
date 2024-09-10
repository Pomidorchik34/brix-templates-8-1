import { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import hero from "../images/hero.svg";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import language from "../lang.json";

function Home() {
  const [lang, setLang] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"));
    }
  }, []);
  return (
    <div>
      <Header />
      <div className="pl-[98px] flex justify-between items-center .w-[1342px].h-[987.61px]">
        <div className="text">
          <span className="text-[#4A3AFF] uppercase font-bold leading-5 mb-[27px]">
            {language[lang].home[0]}
          </span>
          <h1 className="text-[50px] font-bold leading-[62px] mb-[18px]">
            {language[lang].home[1]}
          </h1>
          <p className="text-[18px] text-[#6F6C90] mb-[49px]">
            {language[lang].home[2]}
          </p>
          <div className="flex">
            <button className="btn-def bg-def-blue mr-[24px]">
              {language[lang].home[3]}
            </button>
            <button className="btn-def-outline">
              {language[lang].home[4]}
            </button>
          </div>
        </div>
        <img src={hero} alt="" />
      </div>
      <div className="h-[1px] w-full bg-[#D9DBE9]"></div>
      <Footer />
    </div>
  );
}

export default Home;
