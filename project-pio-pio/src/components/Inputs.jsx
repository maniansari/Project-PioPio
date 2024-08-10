import React from 'react'
import { UilSearch, UilCelsius,UilLocationPoint,UilFahrenheit } from '@iconscout/react-unicons'


function Inputs() {
  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
     <input placeholder="e.g Shanghai"type="text" className="text-xl font-light p-2 w-full shadow-xl space-x-4 focus:outline-none capitalize"></input>   
     <UilSearch size={25} className="text-white cursor-pointer hover:scale-125" />
     <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"  />
     </div>
     <div className="flex flex-row w-1/4 items-center justify-center">
      <UilCelsius size={25} className="text-white cursor-pointer trasnsition ease-out hover:scale-125"></UilCelsius>
      <p className="text-white space-x-4 p-2 shadow-xl justify-around mx-1">|</p>
      <UilFahrenheit size={25} className="text-white cursor-pointer trasnsition ease-out hover:scale-125"></UilFahrenheit>
     </div>
    </div>
  );
}

export default Inputs;