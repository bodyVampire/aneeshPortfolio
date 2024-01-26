"use client"
import { TypeAnimation } from 'react-type-animation';
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdDarkMode } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin,FaYoutube } from "react-icons/fa";
import Skill from './skill';
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
    
<main className=" bg-black px-5">

  <section className="min-h-scree">
  <nav className="py-10 mb-12 flex justify-between">
<h1 className="text-xl text-white font-bold" data-aos="fade-right" data-aos-duration="2000">--Developer--</h1>
<ul className="flex items-center">
  <li>
  <MdDarkMode className="cursor-pointer text-2xl" />
  </li>
  <li><a 
  className="bg-violet-950	 text-white rounded-sm py-2 px-4 ml-8 border-none" href="#">Resume</a></li>
</ul>
</nav>
<div className="text-center p-10">
<TypeAnimation
  sequence={[
    "Aneesh",
    1000,
    " ",
    1000,
    
  ]}
  speed={300}
  style={{ fontSize: '5em' }}
  repeat={Infinity}
  className="text-white font-sans"
/>
<h3 className="text-2xl text-blue-600 py-2">Front-End <span className="font-bold" data-aos="fade-left" data-aos-duration="2000">Dev</span> </h3>
<p className="text-md py-5 leading-8 text-white">
With a strong foundation in computer science, I am currently honing my skills and knowledge through an internship at INFORTRIXS,
 specializing in Front-End Development.
</p>
</div>
<div className="text-4xl flex justify-center gap-10 " >
<a href="https://twitter.com/codewithaneesh" target="_blank"data-aos="fade-up" data-aos-duration="1500"><FaSquareXTwitter className="text-zinc-500" /></a>
<a href="https://www.linkedin.com/in/aneeshmaury/" target="_blank" data-aos="fade-up" data-aos-duration="1800"><FaLinkedin className="text-zinc-500" /></a>
<a href="https://www.youtube.com/@codewithaneesh" target="blank" data-aos="fade-up" data-aos-duration="2100"><FaYoutube className="text-zinc-500" /></a>

</div>
<img src="/images/logo.jpg" alt="logo" className="flex justify-center rounded-full w-80 h-80 mt-10 mx-auto"   data-aos="fade-up"  data-aos-duration="2000" />
<div class="border-t border-gray-500 my-4"></div>
<h1 className="text-3xl text-black font-bold w-54 text-center shadow-md bg-blue-500 px-4 py-2 m-10" data-aos="zoom-in" data-aos-duration="2000">Tech Stack</h1>

<div className="skill-container bg-zinc-950 rounded-md p-6 h-92 md:flex justify-around">

<div className="skill-section bg-black p-4 rounded-sm md:bg-zinc-950  mt-11">
<Skill/>
</div>
<div className="logo-section bg-black p-4 rounded-sm mt-6 md:ml-32 ">
  <p className="text-white w-62 p-4 md:w-56 h-56" data-aos="zoom-in" data-aos-duration="2000">
"Passionate frontend developer proficient in HTML, CSS, and JavaScript, with expertise in React and Next.js. Transforming ideas into interactive and engaging web experiences."</p>
</div>


</div>
<div className="project">



</div>

 
  </section>





</main>
   
  )
}
