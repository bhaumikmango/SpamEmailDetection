import { Link, useLocation } from "react-router"


const Navbar = () => {
    const loc = useLocation();
    return (
        <>
            <div className='flex justify-between px-20 py-2 shadow-lg items-center'>
                <div className="logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/3068/3068066.png" className='w-10' />
                </div>
                <div className="nav-items flex space-x-10">
                    <Link to={"/"}><p className={loc.pathname==="/"?"font-medium underline underline-offset-2":""}>Home</p></Link>
                    <Link to={"/about"}><p className={loc.pathname==="/about"?"font-medium underline underline-offset-2":""}>About</p></Link>
                    <Link to={"/contact"}><p className={loc.pathname==="/contact"?"font-medium underline underline-offset-2":""}>Contact</p></Link>
                </div>
                <div className="dark-mode">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>


                </div>
            </div>
        </>
    )
}

export default Navbar