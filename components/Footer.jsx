import React from "react";
import Link from "next/link";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="w-full bg-transparent-900 text-white-500 px-10 border-t w-full inline-block border-grey-400 py-8">
      <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
        <div className="text-center">
          <div className="">
            Copyright ©{" "}
            <strong>
              <span>The Coffee Delight ☕️ </span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="">
            Designed by{" "}
            <a href="#" className="text-brown-500">
              Gerda Kasselman
            </a>
          </div>
        </div>
        <div className="text-center text-xl text-brown mb-2">
          <a
            href="https://www.instagram.com/thecoffeedelight/"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white-500 hover:bg-gray-600 mx-1 inline-block pt-1"
          >
            {" "}
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/The-Coffee-Delight-100264575926449"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white-500 hover:bg-gray-600 mx-1 inline-block pt-1"
          >
            {" "}
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCiuwoW7-l0ZME7BhTr1Psxw"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white-500 hover:bg-gray-600 mx-1 inline-block pt-1"
          >
            {" "}
            <i className="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
