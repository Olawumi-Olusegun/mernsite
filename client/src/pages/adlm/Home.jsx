// HomeA.js
import React from "react";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaPlay,
  FaStar,
} from "react-icons/fa";
import { Link,  } from "react-router-dom";
import "swiper/css/bundle";
import ImageSlider from "../../components/ImageSlider";

export default function Home() {


  return (
    <>
    <div className="h-full w-full">
      {/* Top Section */}
      <div className="bg-white w-full text-center md:text-start">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[680px]">
          <div className="w-full place-self-center lg:w-[537px] flex flex-col items-center lg:items-start gap-5  mt-5 p-6  ">
            <div className="flex rounded-lg bg-[#DBEFFF] text-black p-3 items-center justify-center gap-3 w-max">
              <Link
                // to={"/planswift-plugin"}
                className="font-[Inter] text-[14px] "
              >
                Construction management plugin
              </Link>
              <FaArrowRight className="items-center w-[16px] h-[16px]" />
            </div>
            <h1 className="text-5xl text-center lg:text-start font-bold md:text-6xl font-[DMSans] w-full">
              Quantity
              <span className="text-[#9747FF]"> takeoff</span> <br /> just got
              easier <br /> and faster
            </h1>
            <div className="flex flex-wrap items-center p-1 w-full md:max-w-2xl md:mx-auto">
              <p className="text-center lg:text-start">
                ADLM studio provides a door to the world of amazing knowledge
                and skill required for the usage of BIM tools to be within the
                reach of Nigeria and Africa construction industry as a whole.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 mt-3 w-full">
              <Link
                to={"https://wa.me/message/HS7PK467KV53I1"}
                className="bg-black duration-300 border-2 w-full lg:w-auto text-white text-center p-4 rounded-lg  hover:bg-transparent border-black hover:text-black"
              >
                Request a demo
              </Link>
              <Link
                to={"https://youtube.com/@ADLMStudio?si=Ul6dJx4YRVu-IR79"}
                className="rounded-lg p-4 flex gap-3 items-center justify-center border-2 text-center w-full lg:w-auto border-black duration-300  hover:bg-black  hover:text-white"
              >
                <FaPlay className="bg-transparent" /> Watch Video
              </Link>
            </div>
          </div>
          <div className="lg:block hidden self-end overflow-hidden">
            <ImageSlider />
          </div>
        </div>
      </div>

      {/* Unlock Features */}
      <div className="grid grid-cols-12 mt-20 bg-white">
        <div className="col-span-12 lg:col-span-6 lg:place-self-center">
          <div className=" w-full lg:w-[444px]">
            
            <div className="px-5 py-5 lg:px-0">
              <h2 className="font-bold text-4xl my-4 md:text-6xl">
                Unlock features of the
                <span className="text-[#E3B309]"> plugin</span>
              </h2>

              <ul className="space-y-2 text-[#828282] text-lg md:text-2xl">
              <li className="flex gap-2 items-center ">
                <FaStar />
                <p>Rates</p>
              </li>
              <li className="flex gap-2 items-center">
                <FaStar />
                <p>Export to excel</p>
              </li>
              <li className="flex gap-2 items-center">
                <FaStar />
                <p>Reports</p>
              </li>
              <li className="flex gap-2 items-center">
                <FaStar />
                <p>Material schedule for measured works</p>
              </li>
            </ul>
            <Link
              className="my-4 group flex items-center gap-x-2 rounded-lg border bg-[#6a98e9] hover:bg-[#6a98e9]/80 duration-300 w-max py-3 px-4"
              // to={"/services"}
            >
              <span className="font-bold text-lg">Learn more</span>
              <FaArrowDown className="group-hover:scale-75 duration-300" />
            </Link>


            </div>

          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
        <img
            src="../sliderImages/ADLM Training Teazer.jpg"
            alt=""
            className="inset-0 w-full h-full object-cover object-right"
          />
        </div>
      </div>

      {/* Integration */}

      <div className="w-full py-6 lg:py-10 ">
        <div className="w-full lg:max-w-[1440px] lg:mx-auto grid grid-cols-12 gap-y-10 py-10 px-5 lg:px-0">
          <div className="w-full col-span-12 lg:col-span-7 flex flex-col place-self-center md:w-[70%] lg:w-[508px]">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-[56px] md:leading-[56px] text-[#1D1D1D]">
              Integration with other Products
            </h2>
            <p className="text-gray-500 w-full md:text-xl py-5">
              Learn how teams of all sizes are using ADLM integrate with other
              products to create value.
            </p>
            <div className="flex space-x-5 ">
              <div className="w-[50%] border-t-4 border-t-gray-500 border-black">
                <h3 className="text-3xl font-bold text-[#1D1D1D] pt-3">
                  10,000
                </h3>
                <p className="text-[#828282]">
                  Vendors from all over the country
                </p>
              </div>
              <div className="w-[50%] border-t-4 border-t-gray-500">
                <h3 className="text-3xl font-bold text-[#1D1D1D] pt-3">
                  50,000
                </h3>
                <p className="text-[#828282]">Users Uses ADLM Plugins</p>
              </div>
            </div>
          </div>
          {/* clients */}
          <div className="w-full flex col-span-12 lg:col-span-5 justify-center items-center mt-10 md:mt-0 ">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-5 ">
              <div className="flex justify-center items-center w-36 lg:w-40 h-24 bg-white shadow-md rounded hover:opacity-65">
                <img
                  src="logo/msProject.png"
                  alt="msProject"
                  className="object-cover w-[64px] h-[64px]"
                />
              </div>
              <div className="flex justify-center items-center w-36 lg:w-40 h-24 bg-white shadow-md rounded hover:opacity-65">
                <img
                  src="logo/autodesk.png"
                  alt="autodesk"
                  className="object-cover w-[64px] h-[64px]"
                />
              </div>
              <div className="flex justify-center items-center w-36 lg:w-40 h-24 bg-white shadow-md rounded hover:opacity-65">
                <img
                  src="logo/autoCad.png"
                  alt="autoCad"
                  className="object-cover w-[64px] h-[64px]"
                />
              </div>
              <div className="flex justify-center items-center w-36 lg:w-40 h-24 bg-white shadow-md rounded hover:opacity-65">
                <img
                  src="logo/bluebeam.png"
                  alt="bluebeam"
                  className="object-cover w-[64px] h-[64px]"
                />
              </div>
              <div className="flex justify-center items-center w-36 lg:w-40 h-24 bg-white shadow-md rounded hover:opacity-65">
                <img
                  src="logo/costX.png"
                  alt="costX"
                  className="object-cover w-[64px] h-[64px]"
                />
              </div>
              <div className="flex justify-center items-center w-36 lg:w-40 h-24 bg-white shadow-md rounded hover:opacity-65">
                <img
                  src="logo/excel.png"
                  alt="excel"
                  className="object-cover w-[64px] h-[64px]"
                />
              </div>
              <div className="flex justify-center items-center w-36 lg:w-40 h-24 bg-white shadow-md rounded hover:opacity-65">
                <img
                  src="logo/navisworks.png"
                  alt="navisworks"
                  className="object-cover w-[64px] h-[64px]"
                />
              </div>
              <div className="flex justify-center items-center w-36 lg:w-40 h-24 bg-white shadow-md rounded hover:opacity-65">
                <img
                  src="logo/planswift.png"
                  alt="planswift"
                  className="object-cover w-[64px] h-[64px]"
                />
              </div>
              <div className="flex justify-center items-center w-36 lg:w-40 h-24 bg-white shadow-md rounded hover:opacity-65">
                <img
                  src="logo/powerBi.png"
                  alt="powerBI"
                  className="object-cover w-[64px] h-[64px]"
                />
              </div>
              <div className="flex justify-center items-center w-36 lg:w-40 h-24 bg-white shadow-md rounded hover:opacity-65">
                <img
                  src="logo/revit.png"
                  alt="revit"
                  className="object-cover w-[64px] h-[64px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ready to serve */}

      <div className="p-5 sm:p-20 lg:p-[120px] bg-white w-full">
        <div className="flex flex-col gap-3 py-5">
          <h2 className="font-bold text-5xl md:text-[56px] line-clamp-1">
            We are here to serve you
          </h2>
          <p className="text-[#828282] font-normal text-[16px]">
            Here are some of the serviecs you tend to benefit when you use tthe
            ADLM Plugin
          </p>
        </div>
        <div className="flex md:flex-row flex-col mt-6 gap-6 justify-center">
          
          <Link className="bg-[#F5F5F5] flex flex-col justify-between p-6 rounded-lg shadow-sm border w-full md:w-1/2"
            // to={"/services"}
          >
              <div className="w-[64px] h-[64px] rounded-lg bg-white flex items-center justify-center">
                <img src="icon/bldg.png" alt="Training Icon" />
              </div>

              <div className="flex flex-col gap-4 py-10 mt-10 lg:mt-20 ">
                <h2 className="text-[#212121] font-bold text-[32px]">
                  Training
                </h2>
                <p className="text-[#828282]">
                  Innovative digital learning that focus on training people on
                  how to use BIM tools to carry out 4D, 5D, 6D designs projects
                </p>
              </div>
          </Link>
          
          <Link className="bg-[#F5F5F5] flex flex-col justify-between p-6 rounded-lg shadow-sm border w-full md:w-1/2"
            // to={"/pricing"}
          >
              <div className="w-[64px] h-[64px] rounded-lg bg-white flex items-center justify-center">
                <img
                    src="icon/bldg2.png"
                    alt="Installation Icon"
                    className="items-center object-cover"
                  />
              </div>

              <div className="flex flex-col gap-4 py-10 mt-10 lg:mt-20">
                <h2 className="text-[#212121] font-bold text-[32px]">
                Installation
                </h2>
                <p className="text-[#828282]">
                  Learn to install plugin and software for use on each
                  construction project
                </p>
              </div>
          </Link>
         
        </div>
        <div className="items-center justify-center my-[30px] flex gap-8">
          
          <button className="flex items-center justify-center w-10 h-10 text-gray-600 border-2 border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none ">
            <FaArrowLeft />
          </button>
          <button className="flex items-center justify-center w-10 h-10 text-gray-600 border-2 border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none ">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Client Reviews */}
        <div className="bg-[#212121] text-white py-16 px-4">
          <div className="text-center mb-12 mt-5">
            <h2 className="text-4xl font-bold mb-3">What our client say</h2>
            <p className="text-white/90 leading-5 mb-8 w-full lg:max-w-[35%] mx-auto">
              Learn how teams of all sizes are using ADLM to integrate with other
              products to create value.
            </p>
          </div>
          <div className="w-full lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Each Block of item */}
            {/* TODO:|| Map our the reviews to the backend section of the code */}

            <div className="h-[528px] py-[54px] px-[36px] bg-[#212121] border border-white/10 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <blockquote className="mb-4">
                <p className="mb-4 text-start text-white/90">
                  "Innovative digital learning that focuses on training people on
                  how to use BIM tools to carry out 4D, 5D, 6D designs projects."
                </p>
              </blockquote>
              <div className="w-full flex items-center  mt-auto ">
                <img
                  src=""
                  alt="Client"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="">
                  <h4 className="text-lg font-bold">Salama</h4>
                  <p className="text-gray-400">CEO, Eden</p>
                </div>
              </div>
            </div>
            <div className="h-[528px] py-[54px] px-[36px] bg-[#212121] border border-white/10 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <blockquote className="mb-4">
                <p className="mb-4 text-start text-white/90">
                  "Innovative digital learning that focuses on training people on
                  how to use BIM tools to carry out 4D, 5D, 6D designs projects."
                </p>
              </blockquote>
              <div className="w-full flex items-center  mt-auto ">
                <img
                  src=""
                  alt="Client"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="">
                  <h4 className="text-lg font-bold">Salama</h4>
                  <p className="text-gray-400">CEO, Eden</p>
                </div>
              </div>
            </div>
            <div className="h-[528px] py-[54px] px-[36px] bg-[#212121] border border-white/10 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <blockquote className="mb-4">
                <p className="mb-4 text-start text-white/90">
                  "Innovative digital learning that focuses on training people on
                  how to use BIM tools to carry out 4D, 5D, 6D designs projects."
                </p>
              </blockquote>
              <div className="w-full flex items-center  mt-auto ">
                <img
                  src=""
                  alt="Client"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="">
                  <h4 className="text-lg font-bold">Salama</h4>
                  <p className="text-gray-400">CEO, Eden</p>
                </div>
              </div>
            </div>

          </div>
          <div className="items-center group justify-center my-[30px] flex gap-8">
            <button className="flex items-center justify-center w-10 h-10 text-gray-600 border border-white/10 rounded-full hover:bg-white/70 duration-300 focus:outline-none ">
              <FaArrowLeft />
            </button>

            <button className="flex items-center justify-center w-10 h-10 text-gray-600 border border-white/10 rounded-full hover:bg-white/70 duration-300 focus:outline-none ">
              <FaArrowRight />
            </button>
          </div>
        </div>
      {/* News Letter */}     

    </div>
    </>
  );
}
