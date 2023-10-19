import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero h-[90vh] mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/Jv1mp71/vr-banner.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-xl md:text-3xl lg:text-5xl font-bold">Get Ready For Future</h1>
                    <p className="mb-5">Update yourself with the flow of Innovations </p>
                    <NavLink to='/signUp'><button className="btn btn-primary">Sign Up</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;