import { useState } from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(3);
  const handleCount1 = () => {
    if (count1 >= 6) {
      return setCount1(1);
    }
    setCount1((prev) => prev + 1);
  };
  const handleCount2 = () => {
    if (count2 >= 6) {
      return setCount2(1);
    }
    setCount2((prev) => prev + 1);
  };
  const button = (
    <>
      <div className="absolute left-5 right-5 bottom-0 flex gap-4 -translate-y-1/2 transform justify-end">
        <a
          onClick={handleCount1}
          href={`#slide${count1}`}
          className="btn btn-circle glass active:bg-red-600"
        >
          ❮
        </a>
        <a
          onClick={handleCount2}
          href={`#slide${count2}`}
          className="btn btn-circle glass active:bg-red-600"
        >
          ❯
        </a>
        {/* <NavLink to={`#slide${count2}`}>
            <button onClick={handleCount2} className="btn btn-circle glass"> ❯ </button>
          </NavLink> */}
      </div>
    </>
  );

  const write = <>
  <div className="absolute left-0 top-0 h-full flex items-center transform justify-start bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0) ]
  rounded-lg">
          <div className="text-white space-y-7 pl-24 w-2/4">
            <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
            <p className="">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="text-white">
              <button className="btn btn-active bg-[#ff3811] hover:bg-[#ff3811] text-white me-5">Primary</button>
              <button className="btn btn-outline btn-secondary">
                Secondary
              </button>
            </div>
          </div>
        </div>
  </>

  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-lg" />
        {write}
        {button}
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-lg" />
        {write}
        {button}
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-lg" />
        {write}
        {button}
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-lg" />
        {write}
        {button}
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-lg" />
        {write}
        {button}
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-lg" />
        {write}
        {button}
      </div>
    </div>
  );
};

export default Banner;
