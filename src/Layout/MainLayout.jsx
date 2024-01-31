import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";


const MainLayout = () => {
    return (
        <div className="px-5 md:px-8 lg:px-12 mx-auto">
            <Navbar />
            <Home />
        </div>
    );
};

export default MainLayout;