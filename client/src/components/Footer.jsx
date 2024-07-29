import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t">

      <div className="flex flex-col md:flex-row gap-6 px-4 py-5 md:py-8 lg:py-16 w-full lg:max-w-[1218px] mx-auto">
        <div className="flex flex-col gap-y-5 items-start">
          <img
            src="..\logo\ADLM Studio Logo PNG-07.png"
            alt=""
            className="w-24 h-24"
          />
          <span className="text-gray-500 text-sm">
            Be the first to receive all the recent updates, articles, and
            valuable materials.
          </span>

            <form className="w-full">
              <div className="flex gap-2 flex-col lg:flex-row">
                <input
                  type="email"
                  placeholder="Email address"
                  id="emailAddress"
                  className="border px-4 py-2 flex-1 w-full rounded-lg"
                />
                <button
                  type="button"
                  className="bg-[#00263D] hover:bg-[#00263D]/90 duration-300 text-white text-center rounded-lg px-6 py-2"
                >
                  Subscribe
                </button>
              </div>
            </form>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap gap-y-5 justify-between md:px-10 py-8">
            <div className="w-1/2 lg:w-1/4 mb-6 md:mb-0">
              <h2 className="font-bold text-md mb-2">Product</h2>
              <ul className="list-none mb-0 space-y-2">
                <li>
                  <Link
                    to="/planswift-plugin"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Planswift Plugin
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rate-generator"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Rate Generator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bim-course"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    BIM Course
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bim-course-mep"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    BIM Course on MEP
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ms-project-course"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    MS Project Course
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 lg:w-1/4 mb-6 md:mb-0">
              <h2 className="font-bold text-md mb-2">Support</h2>
              <ul className="list-none mb-0 space-y-2">
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/training"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Training
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 lg:w-1/4 mb-6 md:mb-0">
              <h2 className="font-bold text-md mb-2">Legal</h2>
              <ul className="list-none mb-0 space-y-2">
                <li>
                  <Link
                    to="/terms-of-service"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/why-adlm"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Why ADLM Studio
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 lg:w-1/4 mb-6 md:mb-0">
              <h2 className="font-bold text-md mb-2">Contact</h2>
              <ul className="list-none mb-0 space-y-2">
                <li>
                  <a
                    href="tel:+2348106503524"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    +234-81-0650-3524
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:admin@adlmstudio.net"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    admin@adlmstudio.net
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:help@adlmstudio.com"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    help@adlmstudio.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:px-4 lg:max-w-[1218px] mx-auto">
        
        <div className="w-full border-y">
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-y-2 py-5 md:py-7">
            <h3 className="font-semibold text-[18px]">Connect with us</h3>
            <div>
              <ul className="list-none mb-0 flex md:flex-row flex-wrap items-center justify-center gap-4 md:gap-8">
                <li>
                  <a
                    href="https://twitter.com/Adlm_studio"
                    className="text-gray-600 hover:text-gray-800 text-sm duration-300"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/adlm_studio/?hl=en"
                    className="text-gray-600 hover:text-pink-600 text-sm duration-300"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/message/HS7PK467KV53I1"
                    className="text-gray-600 hover:text-green-600 text-sm duration-300"
                  >
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a
                    href="https://web.facebook.com/ADLMStudio"
                    className="text-gray-600 hover:text-blue-600 text-sm duration-300"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/c/DLMStudiosBIMTrainer?sub_confirmation=1"
                    className="text-gray-600 hover:text-red-600 text-sm duration-300"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="flex flex-col items-center flex-wrap md:flex-row justify-center md:justify-between py-5 space-y-2  ">
            <ul className="list-none flex items-center justify-center flex-wrap md:flex-row gap-4">
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-600 hover:underline duration-300 hover:text-gray-800 text-sm"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 hover:underline duration-300 hover:text-gray-800 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/why-adlm"
                  className="text-gray-600 hover:underline duration-300 hover:text-gray-800 text-sm"
                >
                  Why ADLM Studio
                </Link>
              </li>
            </ul>

            <span className="text-sm text-gray-600">
              &copy; { new Date().getFullYear() } ADLM All rights reserved.
            </span>
        </div>

      </div>

    </footer>
  );
}
