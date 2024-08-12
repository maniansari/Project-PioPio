import React from "react";
import { UilClouds, UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'
function TemperatureAndDetails() {
 return ( 
 <div>

   <div className=" flex items-center justify-center py-6 text-xl text-cyan-300">
   <p>Cloudy</p>


</div>
<div className="flex flex-row item-center justify-between text-white py-3">
   <UilClouds size={50} className="w-20 flex flex-row items-center justify-center"></UilClouds>
   <p className="text-5xl">37℃</p>

<div className="flex flex-col space-y-2">
    <div className="flex font-light text-sm items-center justify-center">
 <UilTemperature size={18} className="mr-1"></UilTemperature>
 Real Feel:
 <span className="font-medium ml-1">32℃</span>
    </div>
    <div className="flex font-light text-sm items-center justify-center">
 <UilTear size={18} className="mr-1"></UilTear>
 Humidity:
 <span className="font-medium ml-1">65%</span>
    </div>
    <div className="flex font-light text-sm items-center justify-center">
 <UilWind size={18} className="mr-1"></UilWind>
 Wind Speed:
 <span className="font-medium ml-1">15 MPH</span>
    </div>
</div>
 </div>
 <div className="flex flex-row items-center justify-center space-x-1 text-white text-sm py-3">
    <UilSun />
    <p className="font-light">Rise: <span className="font-medium ml-1">06:30 AM</span></p>
    <p className="font-light">|</p> 
    <UilSunset />
    <p className="font-light">Sunset: <span className="font-medium ml-1">07:30 PM</span></p>
    <p className="font-light">|</p> 
    <UilArrowUp />
    <p className="font-light">High: <span className="font-medium ml-1">39℃</span></p>
    <p className="font-light">|</p> 
    <UilArrowDown/>
    <p className="font-light">Low: <span className="font-medium ml-1">27℃</span></p>
    
 </div>

 </div>

 );
}
export default TemperatureAndDetails;