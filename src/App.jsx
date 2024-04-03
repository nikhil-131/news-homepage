import { useState } from 'react'
import './App.css'
import logo from "./assets/images/logo.svg"
import desktop from "./assets/images/desktop.jpg"
import mobile from "./assets/images/mobile.jpg"
import retro from "./assets/images/retro.jpg"
import laptops from "./assets/images/laptops.jpg"
import gaming from "./assets/images/gaming.jpg"
import menu from "./assets/images/menu.svg"
import close from "./assets/images/close.svg"

function App() {
  const [menuList, setMenuList] = useState(false)

  return (
    <>
      <div className="container w-[80%] h-[90%] md:absolute md:top-0 md:left-0 md:bottom-0 md:right-0 md:m-auto mx-auto text-[#5d5f79]">
        <header className='header pb-8 mt-6 md:mt-0'>
          <nav className='nav-bar flex justify-between'>
            <div className="logo">
              <img className='w-16 h-10' src={logo} alt="" />
            </div>
            <ul className='md:flex hidden gap-6'>
              <li className='hover:text-[#e9ab53] cursor-pointer'>Home</li>
              <li className='hover:text-[#e9ab53] cursor-pointer'>New</li>
              <li className='hover:text-[#e9ab53] cursor-pointer'>Popular</li>
              <li className='hover:text-[#e9ab53] cursor-pointer'>Trending</li>
              <li className='hover:text-[#e9ab53] cursor-pointer'>Categories</li>
            </ul>
            <div className="menu flex justify-center items-center md:hidden">
              <img onClick={() => setMenuList(!menuList)} src={menu} alt="" />
            </div>
            
            <ul className={`md:hidden  h-[100vh] bg-white text-black text-xl w-[80%] absolute ${menuList?'right-0':'right-[-80%]'} top-0 flex flex-col justify-center items-center gap-8 transition-all ease-in-out duration-300`}>
              <img onClick={() => setMenuList(!menuList)} className='absolute top-8 right-10' src={close} alt="" />
              <li className='hover:text-[#e9ab53] cursor-pointer'>Home</li>
              <li className='hover:text-[#e9ab53] cursor-pointer'>New</li>
              <li className='hover:text-[#e9ab53] cursor-pointer'>Popular</li>
              <li className='hover:text-[#e9ab53] cursor-pointer'>Trending</li>
              <li className='hover:text-[#e9ab53] cursor-pointer'>Categories</li>
            </ul>
            
          </nav>
        </header>
        <main>
          <div className="future-news flex md:flex-row flex-col gap-8">
            <section className='brightFuture md:w-[70%] w-full'>
              <div className="brightImg">
                <img className='md:block hidden w-[100%] h-[250px] object-cover' src={desktop} alt="" />
                <img className='md:hidden block w-[100%] h-[400px] object-cover' src={mobile} alt="" />
              </div>
              <article className="brightContent flex md:flex-row flex-col md:gap-14 gap-6 pt-6">
                <div className='heading'>
                  <h1 className='text-5xl font-extrabold text-[#00001a] leading-tight'>The Bright Future of Web 3.0?</h1>
                </div>
                <div className="bright-content">
                  <p className='tracking-wider md:pt-2'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                  <button className='bg-[#f15e50] hover:bg-[#00001a] text-white px-4 py-2 tracking-[0.2rem] uppercase text-sm font-semibold mt-8'>Read More</button>
                </div>
              </article>
            </section>
            <aside className='bg-[#00001a] md:w-[25%] w-full p-4'>
              <h1 className='text-3xl py-3 font-bold text-[#e9ab53]'>New</h1>
              <div className="aside-content">
                <h2 className='text-white text-lg font-bold py-1 hover:text-[#e9ab53] cursor-pointer'>Hydrogen VS Electric Cars</h2>
                <p className='text-sm leading-6 text-[#c5c6ce]'>Will hydrogen-fueled cars ever catch up to EVs?</p>
              </div>
              <div className='w-full h-[1px] bg-[#5d5f79] my-6'></div>

              <div className="aside-content">
                <h2 className='text-white text-lg font-bold pb-1 hover:text-[#e9ab53] cursor-pointer'>The Downsides of AI Artistry</h2>
                <p className='text-sm leading-6 text-[#c5c6ce]'>What are the possible adverse effects of on-demand AI image generation?</p>
              </div>
              <div className='w-full h-[1px] bg-[#5d5f79] my-6'></div>

              <div className="aside-content">
                <h2 className='text-white text-lg font-bold pb-1 hover:text-[#e9ab53] cursor-pointer'>Is VC Funding Drying Up?</h2>
                <p className='text-sm leading-6 text-[#c5c6ce]'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
              </div>
            </aside>
          </div>
          <div className="below-news w-full flex md:flex-row flex-col my-6 gap-4">
            <div className="retro flex gap-4 md:w-1/3 w-full">
              <div className="retroImg w-[30%]">
                <img className='w-full min-w-[65px] h-[100px] object-cover' src={retro} alt="retro pc" />
              </div>
              <div className="retro-content">
                <h1 className='text-2xl font-extrabold text-[#c5c6ce]'>01</h1>
                <h2 className='font-bold text-black hover:text-[#f15e50] cursor-pointer'>Reviving Retro PCs</h2>
                <p className='text-sm'>What happens when old PCs are given modern upgrades?</p>
              </div>
            </div>

            <div className="laptop flex gap-4 md:w-1/3 w-full">
              <div className="retroImg w-[30%]">
                <img className='w-full min-w-[65px] h-[100px] object-cover' src={laptops} alt="retro pc" />
              </div>
              <div className="laptop-content">
                <h1 className='text-2xl font-extrabold text-[#c5c6ce]'>02</h1>
                <h2 className='font-bold text-black hover:text-[#f15e50] cursor-pointer'>Top 10 Laptops of 2024</h2>
                <p className='text-sm'>Our best picks for various needs and budgets.</p>
              </div>
            </div>

            <div className="gaming flex gap-4 md:w-1/3 w-full">
              <div className="retroImg w-[30%]">
                <img className='w-full min-w-[65px] h-[100px] object-cover' src={gaming} alt="retro pc" />
              </div>
              <div className="gaming-content">
                <h1 className='text-2xl font-extrabold text-[#c5c6ce]'>03</h1>
                <h2 className='font-bold text-black hover:text-[#f15e50] cursor-pointer'>The Growth of Gaming</h2>
                <p className='text-sm'>How the pandemic has sparked fresh opportunities.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
