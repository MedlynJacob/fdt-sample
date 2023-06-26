import React from 'react';
import { homeHero } from "../images";

const home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${homeHero})` }}>
      <div className="flex flex-col  align-center ">
      <h2 className="text-black text-9xl z-10 text-center font-bold">Conservation tech, reimagined</h2>
      <p className="text-black text-xl  z-10 text-center mt-12  font-semibold">science Ready Smart Cameras</p>
      </div>
     
    </div>
  );
}

export default home;
