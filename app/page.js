
import { MdDarkMode } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin,FaYoutube } from "react-icons/fa";
import image from "next/image";
export default function Home() {
  return (
<main className=" bg-white px-5">
  <section className="min-h-screen">
  <nav className="py-10 mb-12 flex justify-between">
<h1 className="text-xl font-bold">Developer</h1>
<ul className="flex items-center">
  <li>
  <MdDarkMode className="cursor-pointer text-2xl" />
  </li>
  <li><a 
  className="bg-slate-500 text-white rounded-sm py-2 px-4 ml-8 border-none" href="#">Resume</a></li>
</ul>
</nav>
<div className="text-center p-10">
<h2 className="text-3xl font-bold text-blue-500 py-2">Aneesh Maury</h2>
<h3 className="text-2xl py-2">Developer And Designer</h3>
<p className="text-md py-5 leading-8 text-gray-800">
With a strong foundation in computer science, I am currently honing my skills and knowledge through an internship at INFORTRIXS,
 specializing in Front-End Development.
</p>
</div>
<div className="text-4xl flex justify-center gap-10">
<FaSquareXTwitter />
<FaLinkedin />
<FaYoutube />
</div>
<img src="/images/imagelogo.jpg" alt="logo" className="flex justify-center rounded-full w-80 h-80 mt-10 mx-auto" />
  </section>
</main>
   
  )
}
