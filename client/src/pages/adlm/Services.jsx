import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="w-full">
      <div
        className="h-[630px] pl-4 md:pl-[82px] pr-4 md:pr-[738px] pt-20 md:pt-[229px] pb-10 md:pb-[140px] bg-black/opacity-60 relative bg-cover bg-center flex w-full justify-center items-center"
        style={{ backgroundImage: `url("/background image/Mp1.jpg")` }}
      >
        <div className="self-stretch flex-col justify-start items-start gap-8 inline-flex">
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-white text-4xl md:text-[64px] font-bold font-['DM Sans'] leading-[76.80px]">
              Trainings
            </div>
            <div className="w-full md:w-[620px]">
              <span className="text-white text-base md:text-lg font-normal font-['DM Sans'] leading-snug">
                At
              </span>
              <span className="text-yellow-600 text-base md:text-lg font-bold font-['DM Sans'] leading-snug">
                ADLM
              </span>
              <span className="text-white text-base md:text-lg font-normal font-['DM Sans'] leading-snug">
                , we don't just construct buildings; we build careers. As a
                leading force in the construction industry, we understand the
                importance of skilled professionals who are not only equipped
                with knowledge but also with practical experience.
              </span>
            </div>
          </div>
          <div className="w-[147px] px-4 py-[14.50px] bg-neutral-100 rounded-lg border border-gray-200 justify-center items-center gap-2.5 inline-flex">
            <Link
              className="text-neutral-800 text-base font-normal font-['DM Sans'] leading-tight"
              to={"/BIMNews"}
            >
              Start Learning
            </Link>
            <div className="w-4 h-4 px-[2.67px] py-[4.67px] justify-center items-center flex">
              <div className="origin-top-left rotate-90 w-[6.67px] h-[10.67px] relative"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto pl-4 md:pl-[82px] pr-4 md:pr-[95px] pt-20 pb-20 md:pb-[124.79px] bg-black flex-col justify-start items-start gap-10 md:gap-[147px] inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-4 inline-flex">
          <div className="w-full md:w-[786px] text-white text-3xl md:text-5xl font-bold font-['DM Sans'] leading-[57.60px]">
            We generate chances for career growth and advancement through our
            initiatives.
          </div>
          <div className="w-full md:w-[620px]">
            <span className="text-white text-base md:text-lg font-normal font-['DM Sans'] leading-snug">
              At
            </span>
            <span className="text-yellow-600 text-base md:text-lg font-bold font-['DM Sans'] leading-snug">
              ADLM
            </span>
            <span className="text-white text-base md:text-lg font-normal font-['DM Sans'] leading-snug">
              , we don't just construct buildings; we build careers. As a
              leading force in the construction industry, we understand the
              importance of skilled professionals who are not only equipped with
              knowledge but also with practical experience.
            </span>
          </div>
        </div>
        {/* <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[18.57px]">
          <div className="h-[300px] md:h-[583.21px] bg-black/opacity-20 flex justify-end items-center">
            <img
              className="w-full h-full object-cover"
              src="/images/Dol1 (5).jpg"
              alt="Bluebeam Course"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-4 md:gap-[13px]">
            <div className="w-full h-[300px] md:w-[301.82px] md:h-[285.10px] bg-black/opacity-20 flex justify-end items-center">
              <img
                className="w-full h-full object-cover"
                src="/images/Dol1 (17).jpg"
                alt="Microsoft Project Course"
              />
            </div>
            <div className="w-full h-[300px] md:w-[301.82px] md:h-[285.10px] bg-black/opacity-20 flex justify-end items-center">
              <img
                className="w-full h-full object-cover"
                src="/images/Dol1 (16).jpg"
                alt="BIM Course on MEP works"
              />
            </div>
          </div>
          <div className="md:w-[302px] h-[300px] md:h-[583.21px] bg-black/opacity-20 md:flex hidden justify-end items-center">
            <img
              className="w-full h-full object-cover"
              src="/images/Dol1 (5).jpg"
              alt="Bluebeam Course"
            />
          </div>
        </div> */}
        <div className="self-stretch justify-start items-start gap-[18.57px] inline-flex">
          <div className="w-[301.82px] h-[583.21px] bg-black/opacity-20 flex-col justify-end items-center inline-flex">
            <img
              className="w-full h-full object-cover"
              src="/images/Dol1 (5).jpg"
              alt="Bluebeam Course"
            />
          </div>
          <div className="flex-col justify-start items-start gap-[13px] inline-flex">
            <div className="w-[301.82px] h-[285.10px] bg-black/opacity-20 justify-end items-center inline-flex">
              <img
                className="w-full h-full object-cover"
                src="/images/Dol1 (17).jpg"
                alt="Microsoft Project Course"
              />
            </div>
            <div className="w-[301.82px] h-[285.10px] bg-black/opacity-20 justify-end items-center inline-flex">
              <img
                className="w-full h-full object-cover"
                src="/images/Dol1 (16).jpg"
                alt="BIM Course on MEP works"
              />
            </div>
          </div>
          <div className="w-[301.82px] h-[583.21px] bg-black/opacity-20 flex-col justify-end items-center inline-flex">
            <img
              className="w-full h-full object-cover"
              src="/images/Dol1 (22).jpg"
              alt="Architectural Course"
            />
          </div>
          <div className="flex-col justify-start items-start gap-[13px] inline-flex">
            <div className="w-[301.82px] h-[285.10px] bg-black/opacity-20 justify-end items-center inline-flex">
              <img
                className="w-full h-full object-cover"
                src="/images/Dol1 (14).jpg"
                alt="Quantity Surveying Course"
              />
            </div>
            <div className="w-[301.82px] h-[285.10px] bg-black/opacity-20 justify-end items-center inline-flex">
              <img
                className="w-full h-full object-cover"
                src="/images/Dol1 (18).jpg"
                alt="Civil Engineering Course"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto pl-4 md:pl-[87px] pr-4 md:pr-[86px] pt-20 md:pt-[81px] pb-20 md:pb-[59px] bg-white flex flex-col justify-end items-center gap-10 md:gap-[101px]">
        <div className="self-stretch flex-col justify-start items-center gap-4 inline-flex">
          <div className="text-black text-3xl md:text-5xl font-bold font-['DM Sans'] leading-[57.60px]">
            Trainings that we offer
          </div>
          <div className="text-zinc-500 text-base md:text-xl font-normal font-['DM Sans'] leading-normal">
            Here are some of our courses
          </div>
          <div className="justify-center items-start gap-3 inline-flex">
            <div className="px-4 py-[14.50px] bg-neutral-800 rounded-lg justify-center items-center gap-2.5 flex">
              <div className="text-white text-base font-normal font-['DM Sans'] leading-tight">
                BIM Courses
              </div>
              <div className="w-4 h-4 px-1 justify-center items-center flex"></div>
            </div>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <div className="w-full md:w-[409px] h-[491px] relative rounded-lg shadow border border-gray-200">
            <div className="left-[16px] top-[255px] absolute text-black text-lg font-medium font-['DM Sans'] leading-snug">
              BlueBeam Course
            </div>
            <div className="px-4 py-[15.50px] left-[16px] top-[411px] absolute bg-white rounded-lg border border-gray-200 justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-500 text-sm font-normal font-['DM Sans'] leading-[16.80px]">
                Register for course
              </div>
            </div>
            <img
              className="w-[377px] h-[218px] left-[16px] top-[16px] absolute rounded-lg"
              src="/courses image/Blue.jpg"
              alt="Bluebeam Course"
            />
            <div className="w-[344px] left-[16px] top-[294px] absolute text-zinc-500 text-sm font-normal font-['DM Sans'] leading-[16.80px]">
              This course covers 3D to 5D architectural design using BIM
              software such as Revit, Navisworks, MS project, and Planswift. It
              emphasizes on interoperability and clash detection between
              Architectural and Structural design.
            </div>
          </div>
          <div className="w-full md:w-[409px] h-[491px] relative rounded-lg shadow border border-gray-200">
            <div className="left-[16px] top-[255px] absolute text-black text-lg font-medium font-['DM Sans'] leading-snug">
              Microsoft Project Course
            </div>
            <div className="px-4 py-[15.50px] left-[16px] top-[411px] absolute bg-white rounded-lg border border-gray-200 justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-500 text-sm font-normal font-['DM Sans'] leading-[16.80px]">
                Register for course
              </div>
            </div>
            <img
              className="w-[377px] h-[218px] left-[16px] top-[16px] absolute rounded-lg"
              src="/courses image/MSProj.jpg"
              alt="Microsoft Project Course"
            />
            <div className="w-[344px] left-[16px] top-[294px] absolute text-zinc-500 text-sm font-normal font-['DM Sans'] leading-[16.80px]">
              This course covers 3D to 5D architectural design using BIM
              software such as Revit, Navisworks, MS project, and Planswift. It
              emphasizes on interoperability and clash detection between
              Architectural and Structural design.
            </div>
          </div>
          <div className="w-full md:w-[409px] h-[491px] relative rounded-lg shadow border border-gray-200">
            <div className="left-[16px] top-[255px] absolute text-black text-lg font-medium font-['DM Sans'] leading-snug">
              BIM Course on MEP works
            </div>
            <div className="px-4 py-[15.50px] left-[16px] top-[411px] absolute bg-white rounded-lg border border-gray-200 justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-500 text-sm font-normal font-['DM Sans'] leading-[16.80px]">
                Register for course
              </div>
            </div>
            <img
              className="w-[377px] h-[218px] left-[16px] top-[16px] absolute rounded-lg"
              src="/courses image/BIMonMEP.jpg"
              alt="BIM Course on MEP works"
            />
            <div className="w-[344px] left-[16px] top-[294px] absolute text-zinc-500 text-sm font-normal font-['DM Sans'] leading-[16.80px]">
              This course covers 3D to 5D architectural design using BIM
              software such as Revit, Navisworks, MS project, and Planswift. It
              emphasizes on interoperability and clash detection between
              Architectural and Structural design.
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-4 inline-flex">
          <div className="w-16 h-16 rounded-[64px] border border-gray-200 justify-center items-center flex">
            <div className="grow shrink basis-0 self-stretch py-1 justify-center items-center inline-flex"></div>
          </div>
          <div className="w-16 h-16 rounded-[64px] border border-black justify-center items-center flex">
            <div className="grow shrink basis-0 self-stretch py-1 justify-center items-center inline-flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
