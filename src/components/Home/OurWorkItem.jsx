import Image from "next/image";
import Link from "next/link";

const OurWorkItem = ({ id, portfolio }) => {
  return (
    <>
      <Link
        href={`/portfolio/${id}`}
        className="img-container sm:w-[352px] h-[262px]"
      >
        <Image
          src={
            process.env.NEXT_PUBLIC_API_BASEURL +
            portfolio?.thumbnail?.data?.attributes?.url
          }
          alt="portfolio-img"
          width={100}
          height={100}
        />
      </Link>
      <p className="text-[24px] font-oswald font-bold text-white">
        {portfolio?.title}
      </p>
      <div className="flex items-center">
        <div className=" bg-white w-[68px] h-[2px]"></div>
        <div className=" bg-white w-[12px] h-[12px] rounded-full"></div>
      </div>
      <p className="text-white text-[15px] font-jakarta">
        {portfolio?.category?.data?.attributes?.title}
      </p>
    </>
  );
};

export default OurWorkItem;
