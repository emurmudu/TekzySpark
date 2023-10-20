import Banner from "../Header/Banner";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import brandInfo from '../../../src/json/brand.json';
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <Banner></Banner>

            <div className=" grid grid-cols-1 md:grid-cols-4 gap-2 ">
                <div className="">
                    <LeftSideBar></LeftSideBar>
                </div>

                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-1 gap-2">
                    <h1 className=" md:text-3xl text-2xl text-center mb-2 md:mb-4">OUR BRANDS</h1>
                    {brandInfo.map(brand => (
                        <div key={brand.id} className="overflow-hidden rounded-lg">
                            <NavLink to={`/brandDetails/${brand.brand_name}`}>
                                <img
                                    src={brand.image_url}
                                    alt={brand.brand_name}
                                    className="w-full h-auto"
                                />
                                <p className="font-bold text-xl mb-2 text-center">{brand.brand_name}</p>
                            </NavLink>

                        </div>
                    ))}
                </div>
                <div className="">
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;