import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import products from "../products.json";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import language from "../lang.json";
function Products() {
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);
  const [lang2, setLang2] = useState(`value.name.EN`);
  const [lang, setLang] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"));
    }
    if (localStorage.getItem("lang2")) {
      setLang2(`value.name.${localStorage.getItem("lang2")}`);
    }
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="main flex flex-col justify-center">
        <h1 className="text-center text-[50px] font-bold my-10">
          {language[lang].products[0]}
        </h1>
        <div className="px-[98px] flex flex-wrap justify-between gap-12">
          {products.map((value) => {
            return (
              <div
                key={value.id}
                className="card card-compact bg-base-100 w-96 shadow-xl"
              >
                <figure>
                  <img
                    className="w-[400px] h-[200px] object-cover"
                    src={value.img}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{eval(lang2)}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, dicta?
                  </p>
                  <p className="font-bold">{value.price}</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary rounded-[50px] font-[DM sans]"
                      onClick={() => {
                        dispatch(add(value));
                      }}
                    >
                      {language[lang].products[1]}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Products;
