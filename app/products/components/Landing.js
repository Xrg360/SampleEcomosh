import React from "react";
import Card from "./Card";

const Landing = () => {
  const products = [
    {
      name: "Babywear",
      img: "/assets/babywear.png",
      link: "/products/babywear",
    },
    {
      name: "Lifestyle",
      img: "/assets/lifestyle.png",
      link: "/products/lifestyle",
    },
    {
      name: "Gifts",
      img: "/assets/gifts.png",
      link: "/products/gifts",
    },
    {
      name: "New In",
      img: "/assets/newin.png",
      link: "/products/newin",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col  items-center">
      <div id="upper" className=" w-full h-1/4">
        hai
      </div>
      <div className="w-full h-full flex flex-wrap justify-center items-center">
        <div id="left" className="w-1/4 h-full">
          hi
        </div>
        <div id="right" className="w-3/4 flex-wrap justify-center items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full bg-slate-500 h-full flex justify-center items-center"
            >
              <Card name={product.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
