import Image from "next/image";
import React from "react";
import Button from "../UI/Button";

const ServiceItem = ({ service }) => {
  return (
    <>
      <div className="img-container w-[371px] h-[384px]">
        <Image src={service.img}  alt={service.serviceName}  />
      </div>
      <div className="flex flex-col  gap-y-[55px] w-[495px]">
        <h1 className="text-[40px] font-oswald font-bold text-white">{service.serviceName}</h1>
        <div className="flex items-center">
        <div className=" bg-white w-[68px] h-[2px]"></div>
        <div className=" bg-white w-[12px] h-[12px] rounded-full"></div>
        </div>
        <p className="text-[16px] text-white font-jakarta">{service.content}</p>
        <Button className="bg-transparent text-white text-[16px] py-1 font-oswald font-medium w-fit">Learn More</Button>
      </div>
    </>
  );
};

export default ServiceItem;