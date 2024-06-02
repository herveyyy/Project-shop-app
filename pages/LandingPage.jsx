// "use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import LandingImage from "../public/BG.jpg";
import { Suspense } from "react";

import { IconButton, BuildingStorefrontIcon } from "../components/ClientSide";
import ImagesSlide from "@/components/ImagesSlide";
const Typography = dynamic(
  () => import("../components/ClientSide").then((mod) => mod.Typography),
  { ssr: false }
);
// const Timeline = dynamic(
//   () => import("../components/ClientSide").then((mod) => mod.Timeline),
//   { ssr: false }
// );
// const TimelineItem = dynamic(
//   () => import("../components/ClientSide").then((mod) => mod.TimelineItem),
//   { ssr: false }
// );
// const TimelineConnector = dynamic(
//   () => import("../components/ClientSide").then((mod) => mod.TimelineConnector),
//   { ssr: false }
// );
// const TimelineHeader = dynamic(
//   () => import("../components/ClientSide").then((mod) => mod.TimelineHeader),
//   { ssr: false }
// );
// const TimelineIcon = dynamic(
//   () => import("../components/ClientSide").then((mod) => mod.TimelineIcon),
//   { ssr: false }
// );
// const TimelineBody = dynamic(
//   () => import("../components/ClientSide").then((mod) => mod.TimelineBody),
//   { ssr: false }
// );

const LandingPage = () => {
  return (
    <div className="w-full ">
      <div className=" overflow-y-hidden">
        <div className="w-full overflow-hidden absolute -z-50 ">
          <Image
            src={LandingImage}
            loading="lazy"
            alt="bg"
            className="  object-cover w-full   xsm:-translate-x-0 sm:-translate-x-11  h-[125vh] xsm:h-[100vh] sm:h-[85vh] -translate-y-28  md:translate-x-0  md:translate-y-0  md:h-[75vh] lg:h-[90vh]  scale-125  md:scale-100 object-bottom "
          />
        </div>
        {/* Title Card */}
        <div className="w-full ">
          <div className=" mt-32">
            {/* Title */}
            <Typography
              variant="h1"
              type=""
              className="text-center !text-white"
            >
              Thrift Crate PH
            </Typography>
            {/* Details */}
            <div className=" mx-0 sm:mx-10 md:mx-24 lg:mx-56">
              <Typography
                variant="paragraph"
                type=""
                className="text-center !text-white mt-10"
              >
                &quot; Welcome to Thrift Crate PH, your gateway to a world of
                curated vintage treasures and unique finds! Delve into our
                collection and uncover hidden gems that exude timeless charm.
                Whether you&apos;re a seasoned collector or just beginning your
                journey into the world of thrift, we&apos;re here to make your
                experience unforgettable. Take your time, browse through our
                selection, and let the nostalgia of vintage items transport you
                to another era. Happy hunting! &quot;
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:my-5 lg:mt-16 xl:mt-32 my-10 ">
        <button className="border-white !text-white border-2 p-2 rounded-lg flex gap-1 backdrop-blur-md bg-white/5 dark:bg-black dark:hover:bg-black hover:text-black dark:hover:text-black hover:bg-black  duration-500">
          <div className="w-5 h-5">
            <BuildingStorefrontIcon />
          </div>
          Browse
        </button>
      </div>
      <div>
        <div className="mt-10 w-full lg:flex justify-center  ">
          <div className="flex-wrap gap-x-2 w-full lg:w-1/3 lg:bg-white lg:rounded-xl flex justify-center items-center bg-white/50 border-y dark:bg-black/50 backdrop-blur-md border-gray-700 duration-700 ">
            <Typography
              className=" text-gray-800 dark:text-gray-100  text-center"
              variant="h2"
            >
              Recently Added
            </Typography>
            <div className="h-8 w-8 ">
              <BuildingStorefrontIcon className=" text-gray-800 dark:text-gray-100" />
            </div>
          </div>
        </div>
        {/* Slider for Image */}
        <div className="w-full  justify-center my-12">
          <ImagesSlide />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
