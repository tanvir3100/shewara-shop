import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import SideBar from "../Components/Sidebar/SideBar";



const MainLayout = () => {
    return (
        <>
            <div>
                <div className="px-5 md:px-8 lg:px-12 mx-auto">
                    <div className="w-full block lg:flex">
                        <div className="fixed top-0 left-10 h-full w-44 hidden lg:block">
                            <SideBar />
                        </div>
                        <div className="lg:ml-40 w-full lg:w-5/6 px-2 lg:px-5">
                            <div className="p-2 text-center bg-black text-white">
                                <p className="text-sm">Welcome to SHEWARA</p>
                            </div>
                            <Navbar />
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainLayout;