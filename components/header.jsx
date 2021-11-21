
const header = () => {

    const handleOpenCloseMenu = () => {
        if (document.getElementById('menu').classList.contains("hidden"))
        {
            document.getElementById('menu').classList.remove("hidden")
        } else
        {
            document.getElementById('menu').classList.add("hidden")
        }
    }
    return (
        <>
            <nav dir="rtl" class=" bg-[#111] py-5">
                <div className="w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1024px] 2xl:max-w-[1024px] 3xl:max-w-[1280px] mx-auto">
                    <div className="flex items-center justify-between flex-wrap">
                        <div class="flex items-center flex-shrink-0 text-white ml-6">
                            <img width="54" height="54" src="../assets/fatimaLogo.png" />
                            <span class="font-IranSansMedium text-xl tracking-tight">فاطمه آقاجانی</span>
                        </div>
                        <div class="block lg:hidden">
                            <button onClick={() => handleOpenCloseMenu()} class="flex items-center px-3 py-2 border rounded text-teal-200 ml-3 border-teal-400 hover:text-white hover:border-white">
                                <svg class="fill-current text-white h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                            </button>
                        </div>
                        <div id="menu" class="w-full hidden  flex-grow lg:flex text-white lg:items-center lg:w-auto">
                            <div class="text-sm flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:flex-grow font-IranSansMedium">
                                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-4">
                                    درباره من
                                </a>
                                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-4">
                                    نمونه کارها
                                </a>
                                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                                    وبلاگ
                                </a>
                            </div>
                            <div className="flex justify-center">
                                <a href="#" class="inline-block text-sm px-4 py-2 font-IranSansMedium leading-none border rounded text-white border-white  hover:text-teal-500  mt-4 lg:mt-0">تماس با من</a>
                            </div>
                        </div>
                   </div>
            </div>
            </nav>
            </>
    )
}
export default header