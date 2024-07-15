import React from "react";
import brand1 from "../assets/05.png";
import brand2 from "../assets/brand-2.png";
import brand3 from "../assets/brand-3.png";
import brand4 from "../assets/brand-4.png";
import brand5 from "../assets/brand-5.png";
import { Link } from "react-router-dom";

const companyLogo = [
  { id: 1, img: brand1 },
  { id: 2, img: brand2 },
  { id: 3, img: brand3 },
  { id: 4, img: brand4 },
  { id: 5, img: brand5 },
];

const Category = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28 ">
      {/* brand logo */}
      <div className="flex items-center justify-around flex-wrap py-4 gap-2">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      {/* category grid */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <p className="font-semibold uppercase text-center md:-rotate-90 bg-Black text-white md:p-1.5 p-2 rounded-sm inline-flex">
          Explore new and popular styles
        </p>

        <div>
          <Link to="/">
            <img
              src="/18.png"
              alt=""
              className="w-[525px] hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img src="/01.png" alt=""  className="w-full hover:scale-105 transition-all duration-200"/>
            </Link>
            <Link to="/">
              <img src="/02.png" alt=""  className="w-full hover:scale-105 transition-all duration-200"/>
            </Link>
            <Link to="/">
              <img src="/03.png" alt=""  className="w-full hover:scale-105 transition-all duration-200"/>
            </Link>
            <Link to="/">
              <img src="/20.png" alt=""  className="w-full hover:scale-105 transition-all duration-200"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
