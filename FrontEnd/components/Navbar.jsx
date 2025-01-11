import { useContext, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router"
import Context from "../Context/ContextInit";


const Navbar = () => {
    const loc = useLocation();
    const context = useContext(Context);
    const { setNavFlag, NavFlag, DMode, setDMode, navRef } = context;
    const toggleNav = () => {
        setNavFlag(!NavFlag)
    }
    const toggleMode = () => {
        if (DMode==="dark") {
            setDMode("light");
            localStorage.setItem("mode","light")
        }
        else {
            setDMode("dark");
            localStorage.setItem("mode","dark")
        }
    }
    return (
        <>
            <div className="navbar mb-4" ref={navRef}>
                <div className='flex justify-between px-20 py-2 items-center max-[830px]:px-10 max-[420px]:px-5'>
                    <div className="logo">
                        <img src="https://cdn-icons-png.flaticon.com/512/3068/3068066.png" className='w-10' />
                    </div>
                    <div className="nav-items flex space-x-10 max-[360px]:hidden">
                        <Link to={"/"}><p className={loc.pathname === "/" ? "font-medium underline underline-offset-2" : ""}>Home</p></Link>
                        <Link to={"/about"}><p className={loc.pathname === "/about" ? "font-medium underline underline-offset-2" : ""}>About</p></Link>
                        <Link to={"/contact"}><p className={loc.pathname === "/contact" ? "font-medium underline underline-offset-2" : ""}>Contact</p></Link>
                    </div>
                    <div className="dark-mode cursor-pointer" onClick={toggleMode}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    </div>
                    <div className="hamburger hidden max-[360px]:block" onClick={toggleNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </div>
                </div>
                <div className="nav-sm hidden max-[360px]:block pb-3">
                    <div className="nav-items flex flex-col items-center space-y-4 w-fit mx-auto">
                        <Link to={"/"}><p className={loc.pathname === "/" ? "font-medium underline underline-offset-2" : ""}>Home</p></Link>
                        <Link to={"/about"}><p className={loc.pathname === "/about" ? "font-medium underline underline-offset-2" : ""}>About</p></Link>
                        <Link to={"/contact"}><p className={loc.pathname === "/contact" ? "font-medium underline underline-offset-2" : ""}>Contact</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar