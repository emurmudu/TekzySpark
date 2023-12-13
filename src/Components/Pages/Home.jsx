import React from "react";
import Banner from "../Header/Banner";
import brandInfo from '/src/brand.json'; // Make sure the path is correct
import { NavLink } from "react-router-dom";
import Contact from "./Contact";
import New from "./New";

const Home = () => {
    return (
        <div className="container mx-auto dark:text-white  ">
            <Banner />
            {/* <New /> */}

            <h1 className="md:text-3xl font-bold text-xl lg:text-4xl text-center  pb-2 pt-4 md:pb-4 lg:pb-8 lg:pt-8 bg-gray-300 dark:bg-zinc-700">OUR BRANDS</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 bg-gray-300 dark:bg-zinc-700">
                {brandInfo.map((brand) => (
                    <div key={brand.id} className="overflow-hidden rounded-lg">
                        <NavLink to={`/brandDetails/${brand.brand_name}`}>
                            <img
                                src={brand.image_url}
                                alt={brand.brand_name}
                                className="w-full h-auto md:h-64"
                            />
                            <p className="font-bold text-xl mb-4 mt-4 text-center">{brand.brand_name}</p>
                        </NavLink>
                    </div>
                ))}
            </div>

            <New />
            <div>
                <Contact />
            </div>
        </div>
    );
};

export default Home;
