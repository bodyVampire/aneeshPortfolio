"use client"
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdDarkMode } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin,FaYoutube } from "react-icons/fa";
import "./globals.css"


export default function Home() {
  useEffect(() => {
    AOS.init({
      
      easing: 'ease-in-out',
      offset: 50,
      delay: 0,
      once: true,
      mirror: false,
       })
 }, [])
  
  
  return (
<main className=" bg-white px-5">
  <section className="min-h-screen">
  <nav className="py-10 mb-12 flex justify-between">
<h1 className="text-xl font-bold" data-aos="fade-right" data-aos-duration="2000">--Developer--</h1>
<ul className="flex items-center">
  <li>
  <MdDarkMode className="cursor-pointer text-2xl" />
  </li>
  <li><a 
  className="bg-slate-500 text-white rounded-sm py-2 px-4 ml-8 border-none" href="#">Resume</a></li>
</ul>
</nav>
<div className="text-center p-10">
<h2 className="text-6xl font-bold text-black-500 py-2" data-aos="zoom-in"  data-aos-duration="2000" >Aneesh</h2>
<h3 className="text-2xl py-2">Front-End <span className="font-bold" data-aos="fade-left" data-aos-duration="2000">Dev</span> </h3>
<p className="text-md py-5 leading-8 text-gray-800">
With a strong foundation in computer science, I am currently honing my skills and knowledge through an internship at INFORTRIXS,
 specializing in Front-End Development.
</p>
</div>
<div className="text-4xl flex justify-center gap-10" >
<a href="https://twitter.com/codewithaneesh" target="_blank"data-aos="fade-up" data-aos-duration="1500"><FaSquareXTwitter/></a>
<a href="https://www.linkedin.com/in/aneeshmaury/" target="_blank" data-aos="fade-up" data-aos-duration="1800"><FaLinkedin /></a>
<a href="https://www.youtube.com/@codewithaneesh" target="blank" data-aos="fade-up" data-aos-duration="2100"><FaYoutube /></a>

</div>
<img src="/images/imagelogo.jpg" alt="logo" className="flex justify-center rounded-full w-80 h-80 mt-10 mx-auto"   data-aos="fade-up"  data-aos-duration="2000" />
  </section>



</main>
   
  )
}
