// import React from 'react'
import logo from '../assets/logo.svg';
const Hero = () => {
  return (
    <header className='flex flex-col items-center justify-center'>
  {/* ........ */}
  <div className='w-3/4 flex items-center justify-between mt-4'>
    
  <img src={logo} alt="logo" />
  <a href='https://github.com/awan-huzaifa/Articel-Summarizer' target="_blank" rel="noreferrer">
    <button className="rounded-full bg-orange-800 px-8 py-4 text-slate-950 font-bold text-base tracking-wide">GitHub</button></a>
  </div>
  {/* ............ */}
  <div className='w-3/4 text-center mt-12' >
   <h1 className='text-slate-950 font-bold text-5xl'>Summarize Articles With</h1>
   <h1 className='text-orange-800 font-bold text-5xl pt-4'>OpenAI GPT-4</h1>
   <p className='text-slate-950 pt-4 text-xl'>Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.</p>
  </div>
  
    </header>
  )
}

export default Hero
