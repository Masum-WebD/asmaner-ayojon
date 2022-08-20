import React, { useEffect, useState } from "react";
import Islamic from './Islamic'

const IslamicCalliGraphry = () => {
    const [islamics, setislamics] = useState([]);

    useEffect(() => {
      fetch("islamic.json")
        .then((res) => res.json())
        .then((data) =>setislamics(data));
    }, []);
    return (
        <div className="mt-10">
        <h1 className="text-2xl font-bold  text-gray-700"> Islamic Calligraphy</h1>
        <div className="mx-auto w-full">
          <div className="w-20 mb-5 mx-auto h-1 bg-[#FF87B7]"></div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
          {islamics.map((islamic) => (
           <Islamic islamic={islamic} key={islamic.id}/>
          ))}
        </div>
      </div>
    );
};

export default IslamicCalliGraphry;