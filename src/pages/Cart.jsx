import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import language from "../lang.json";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";

function Cart() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setProducts(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);
  let dispatch = useDispatch();
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
          {language[lang].cart[0]}
        </h1>
        <div className="px-[98px] flex flex-wrap justify-center gap-12 ">
          {products.map((value) => {
            return (
              <div
                key={value.id}
                className="card card-side bg-base-100 shadow-xl w-[1300px]"
              >
                <figure>
                  <img
                    className="w-[300px] h-[280px] object-cover"
                    src={value.img}
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{eval(lang2)}</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eaque, cupiditate?
                  </p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary px-[50px]"
                      onClick={() => {
                        dispatch(remove(value.id));
                        location.reload();
                      }}
                    >
                      {language[lang].cart[1]}
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

export default Cart;
