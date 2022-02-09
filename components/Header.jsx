import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container max-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-grey-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold texg-4xl text-white">
              <img
                className="relative w-15 h-12 mb-0"
                src="/images/logo.png"
                alt="logo"
              />
            </span>
          </Link>
        </div>
        <div className="hidden mf:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="header-container">
        <video
          src="/Videos/pexels-karolina-grabowska-6658124.mp4"
          autoPlay
          loop
          muted
        />
        {/* <h1>YOUR COFFEE AFFAIR AWAITS</h1>
          <p>Explore our world of coffee.</p> */}
    </div>
  );
};

export default Header;
