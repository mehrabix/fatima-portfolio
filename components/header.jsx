import { useState } from "react"
import Link from 'next/link'

const header = (props) => {


    const [menuStatus, setMenuStatus] = useState("h-0");

    const handleOpenCloseMenu = () => {

        if (document.getElementById('menu').classList.contains("h-0"))
        {
            setMenuStatus("h-[175px]")
        } else
        {
            setMenuStatus("h-0")
        }
    }
    return (
        <>
            <nav dir={props.dir} className=" bg-[#FF0066]  py-4  lg:py-5">
                <div className="w-full md:max-w-[768px]  lg:max-w-[1024px] xl:max-w-[1024px] 2xl:max-w-[1024px] 3xl:max-w-[1280px] mx-auto">
                    <div className="flex items-center overflow-hidden justify-between flex-wrap">
                        <div className="flex items-center flex-shrink-0 text-white mx-6">
                            <img width="54" height="54" src="../assets/fatimaLogo.png" />
                            <h1 className="font-IranSansMedium text-xl tracking-tight">{props.pageTitle}</h1>
                        </div>
                        <div className="block lg:hidden">
                            <button onClick={() => handleOpenCloseMenu()} className="flex items-center px-3 py-2 border rounded text-teal-200 mx-3 border-teal-400 hover:text-white hover:border-white">
                                <svg className="fill-current text-white h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                            </button>
                        </div>
                        <div id="menu" className={`w-full ${menuStatus} transition-all ease-linear duration-300 flex-grow lg:flex text-white lg:items-center lg:w-auto`}>
                            <div className="text-sm gap-x-4 gap-y-6 mt-5 lg:mt-0  flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:flex-grow font-IranSansMedium">
                                <Link href={props.aboutMeLink} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:ml-4">
                                    {props.aboutMeText}
                                </Link>
                                <Link href={props.portfolioLink} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:ml-4">
                                    {props.portfolioText}
                                </Link>
                                <Link href={props.blogLink} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                                    {props.blogText}
                                </Link>
                            </div>
                            <div className="flex mt-4 lg:mt-0 justify-center font-IranSansMedium gap-x-4">
                                <Link href={props.contactLink} className="inline-block text-sm px-4 py-2 font-IranSansMedium leading-none border rounded text-white border-white  hover:text-teal-500  mt-4 lg:mt-0">{props.contactText}</Link>
                                <Link href={props.langLink} className="inline-block text-sm px-4 py-2 font-IranSansMedium leading-none border rounded text-white border-white  hover:text-teal-500  mt-4 lg:mt-0">{props.langText}</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default header