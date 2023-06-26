import React from "react";
import melback from "../assets/melback.jpg";
import logo from "../assets/logo.svg";
import map from "../assets/location/map.svg";
import one from "../assets/location/one.svg";
import two from "../assets/location/two.svg";
import three from "../assets/location/three.svg";   
import four from "../assets/location/four.svg";
import five from "../assets/location/five.svg";
import six from "../assets/location/six.svg";
import seven from "../assets/location/seven.svg";

const Landmarks = () => {
  return (
    <div className="py-20">
      <h2 className="text-3xl">LANDMARKS</h2>
      <div
        className="relative bg-cover  "
        // style={{ backgroundImage: `url(${melback})`}}
        style={{
          backgroundImage: `url(${melback})`,
          height: 900, // Default height for larger devices
            // height: "150vh", // 
        }}
      >
        {/* small images  */}
        <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-wrap items-center justify-center">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white">
              <img
                className="w-full "
                src={logo}
                alt="Image"
              />
              Tram stop at doorstep
            </div>
            <div className="bg-white">
              <img className="w-full " src={one} alt="Image" />
            </div>
            <div className="bg-white">
              <img className="w-full " src={two} alt="Image" />
            </div>
            <div className="bg-white">
              <img className="w-full " src={three} alt="Image" />
            </div>
            <div className="bg-white">
              <img className="w-full " src={four} alt="Image" />
            </div>
            <div className="bg-white">
              <img className="w-full " src={five} alt="Image" />
            </div>
            <div className="bg-white">
              <img className="w-full " src={six} alt="Image" />
            </div>
            <div className="bg-white">
              <img className="w-full " src={seven} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landmarks;
