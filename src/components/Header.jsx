import { useEffect, useState } from "react"

export default function Header () {
    const [isMobile , setIsMobile] = useState(false)

    useEffect( () => {
        const body = document.querySelector("body")
        isMobile ? body.style.cssText = `overflow-y: hidden;` : body.style.cssText = `overflow-y: auto;`
    },[isMobile])

    function handleMobileNav () {
        setIsMobile(prevMobileState => !prevMobileState)
    }
    
    return (
        <header className="bg-white">
            <div className="header-container py-3 px-[1rem] sm:px-[2rem] flex justify-between items-center relative ">
                <div className="left-content ">
                    <a href="#" className="logo tracking-tight text-xl md:text-3xl font-bold font-[Playfair_Display] ">Entrepreneur</a>
                    <nav>
                        <ul className={ "nav-linkes hidden md:flex gap-5 mt-2 text-sm" }>
                            <li>Building a Business</li>
                            <li>Making Money</li>
                            <li>Buying a Franchise</li>
                            <li>Business News</li>
                        </ul>
                        <ul className={`nav-linkes-mobile ${isMobile ? "h-screen" : "h-0"} absolute left-0 z-50 duration-[.3s] w-screen bg-white pt-0 pb-0 overflow-hidden px-[1rem] flex flex-col gap-4`}>
                            <button className="bg-blue-600 rounded-md block mx-auto mt-8 text-sm text-white font-[600] border-0 outline-0 py-[5px] px-[3rem]">Subscribe Now</button>
                            <li className="mt-2 font-semibold">Building a Business</li>
                            <li className="font-semibold">Making Money</li>
                            <li className="font-semibold">Buying a Franchise</li>
                            <li className="font-semibold">Business News</li>
                        </ul>
                    </nav>
                </div>
                <div className="right-content">
                    <div className="head-r hidden md:flex flex-col gap-3">
                        <button className="bg-blue-600 rounded-md block mx-auto text-md text-white font-[600] border-0 outline-0 py-[5px] px-[3rem]">Subscribe Now</button>
                        <div className="login flex justify-center gap-5">
                            <p className="flex gap-2">
                                <svg aria-hidden="true" className="tw:w-[24px] tw:h-[24px] tw:fill-current is-avatar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#010D22" viewBox="0 -960 960 960">
                                    <path d="M234-276q51-39 114-61.5T480-360t132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800t-226.5 93.5T160-480q0 59 19.5 111t54.5 93m246-164q-59 0-99.5-40.5T340-580t40.5-99.5T480-720t99.5 40.5T620-580t-40.5 99.5T480-440m0 360q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280t-100 15.5-86 44.5q39 29 86 44.5T480-160m0-360q26 0 43-17t17-43-17-43-43-17-43 17-17 43 17 43 43 17m0 300"></path>
                                </svg> Sign in
                            </p>
                            <p className="flex gap-2">
                                <svg aria-hidden="true" className="tw:w-[24px] tw:h-[24px] tw:md:mr-2 header-dropdown-toggle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95a15.7 15.7 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A8 8 0 0 1 5.08 16m2.95-8H5.08a8 8 0 0 1 4.33-3.56A15.7 15.7 0 0 0 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"></path>
                                </svg> Edition
                            </p>
                        </div>
                    </div>
                    <div className="mobile-icons flex gap-3 items-center md:hidden">
                        <svg className="tw:w-[24px] tw:h-[24px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 31 27">
                            <path fill="#010D22" d="M18.611 17.38 26 24.77 23.77 27l-7.39-7.389v-1.185l-.417-.418c-1.673 1.464-3.904 2.3-6.274 2.3C4.322 20.308 0 15.987 0 10.69A9.67 9.67 0 0 1 9.689 1c5.298 0 9.62 4.322 9.62 9.689 0 2.37-.837 4.6-2.301 6.273l.418.419zm-8.922 0a6.693 6.693 0 0 0 6.692-6.691 6.693 6.693 0 0 0-6.692-6.692 6.693 6.693 0 0 0-6.692 6.692 6.693 6.693 0 0 0 6.692 6.692"></path>
                        </svg>
                        <svg aria-hidden="true" className="tw:w-[24px] tw:h-[24px] tw:fill-current is-avatar" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#010D22" viewBox="0 -960 960 960">
                            <path d="M234-276q51-39 114-61.5T480-360t132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800t-226.5 93.5T160-480q0 59 19.5 111t54.5 93m246-164q-59 0-99.5-40.5T340-580t40.5-99.5T480-720t99.5 40.5T620-580t-40.5 99.5T480-440m0 360q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280t-100 15.5-86 44.5q39 29 86 44.5T480-160m0-360q26 0 43-17t17-43-17-43-43-17-43 17-17 43 17 43 43 17m0 300"></path>
                        </svg>
                        <svg className="tw:w-[24px] tw:h-[24px] tw:lg:hidden cursor-pointer" onClick={handleMobileNav} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#010D22" viewBox="0 -960 960 960">
                            <path d="M240-160q-33 0-56.5-23.5T160-240t23.5-56.5T240-320t56.5 23.5T320-240t-23.5 56.5T240-160m240 0q-33 0-56.5-23.5T400-240t23.5-56.5T480-320t56.5 23.5T560-240t-23.5 56.5T480-160m240 0q-33 0-56.5-23.5T640-240t23.5-56.5T720-320t56.5 23.5T800-240t-23.5 56.5T720-160M240-400q-33 0-56.5-23.5T160-480t23.5-56.5T240-560t56.5 23.5T320-480t-23.5 56.5T240-400m240 0q-33 0-56.5-23.5T400-480t23.5-56.5T480-560t56.5 23.5T560-480t-23.5 56.5T480-400m240 0q-33 0-56.5-23.5T640-480t23.5-56.5T720-560t56.5 23.5T800-480t-23.5 56.5T720-400M240-640q-33 0-56.5-23.5T160-720t23.5-56.5T240-800t56.5 23.5T320-720t-23.5 56.5T240-640m240 0q-33 0-56.5-23.5T400-720t23.5-56.5T480-800t56.5 23.5T560-720t-23.5 56.5T480-640m240 0q-33 0-56.5-23.5T640-720t23.5-56.5T720-800t56.5 23.5T800-720t-23.5 56.5T720-640"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    )
}