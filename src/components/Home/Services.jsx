import Image from "next/image";
import React from "react";
import bgImage from "../../assets/bg-images/service.png";
import service1 from "../../assets/services/service1.png";
import service2 from "../../assets/services/service2.png";
import service3 from "../../assets/services/service4.png";
import service4 from "../../assets/services/service3.png";
import ServiceItem from "./ServiceItem";
import Button from "../UI/Button";

const SERVICES = [
  {
    id: "s1",
    serviceName: "Digital Marketing Services",
    content:
      "Digital marketing involves some of the same principles as traditional marketing and is often considered a new way for companies to approach consumers and understand their behavior.",
    img: service1,
  },
  {
    id: "s2",
    serviceName: "Mobile & Web Applications",
    content:
      "In our team, developers work alongside designers. This is crucial in creating a fast and responsive website that would excite the audience. We help you create your dream application that will drive users to using them by intensive research among your target audience and award-winning user interfaces.",
    img: service2,
  },
  {
    id: "s3",
    serviceName: "AI & Machine Learning Development",
    content:
      "Artificial Intelligence(AI) & Machine Learning(ML) Solutions. Build Intelligent Business Empower With Our AI & Machine Learning Services. ai and ml development.",
    img: service3,
  },

  {
    id: "s4",
    serviceName: "Back Office Services",
    content:
      "We identify your brand by developing a logo, corporate identity, user manuals, any mockups, and souvenir products. Whatever it takes to get your brand noticed.",
    img: service4,
  },
];

const Services = () => {
  return (
    <section className="w-full h-[3157px] bg-[#424248] px-[80px]">
      <div className={` img-container w-full relative`}>
        <Image src={bgImage} alt="img" />
        <div className="absolute top-0 z-[11] px-[120px] w-full">
          <h1 className="text-[48px] font-oswald font-bold text-white text-center">
            Digital Services
          </h1>
          <div className="flex flex-col gap-y-[158px] pt-[150px]">
            {SERVICES.map((service,index) => {
              return (
                <div className={`flex justify-between ${index == 1 && 'flex-row-reverse'} ${index == 3 && 'flex-row-reverse'} w-full`}>
                  <ServiceItem service={service} />
                </div>
              );
            })}
          </div>
          <div className="bg-[#ffffff] bg-opacity-[10%] h-[168px] mt-[150px] flex flex-col gap-y-[24px] justify-center items-center">
            <p className="font-oswald text-[20px] font-bold text-[#ffffff] text-opacity-[60%]">ACCELERATE YOUR BUSINESS BY LEVERAGING EXCEPTIONAL DIGITAL MARKETING SERVICES </p>
          <Button>BOOK A FREE CONSULTATION</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
