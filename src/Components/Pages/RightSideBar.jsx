import { NavLink } from "react-router-dom";


const RightSideBar = () => {
    return (
        <div className="hidden lg:block">
            <h1 className=" px-4 text-3xl mb-4 text-start">POPULAR PRODUCTS</h1>
            <div className="space-y-4 p-4">
                <img src={'https://i.ibb.co/Gn5LsF5/drone1.jpg'} alt="" />
                <img src={'https://i.ibb.co/PQDzvXJ/watch-1.jpg'} alt="" />
                <img src={'https://i.ibb.co/jyGrwKq/VR.jpg'} alt="" />
                <img src={'https://i.ibb.co/kq1LxLt/left-1.jpg'} alt="" />
                <img src={'https://i.ibb.co/w63Xj3v/watch3.jpg'} alt="" />
            </div>
            <div className='p-4 mb-6 mt-6 w-full'>
                <h2 className="text-lg md:text-2xl mb-4">IMPORTANT LINKS</h2>
                <NavLink to='/signUp'>
                    <a className='p-4 flex text-lg items-center border-b border-t'>
                        <span>Sign Up</span>
                    </a>
                </NavLink>
                <NavLink to='/myCart'>
                    <a className='p-4 flex text-lg items-center border-b'>
                        <span>My Cart </span>
                    </a>
                </NavLink>
                <NavLink to='/addProduct'>
                    <a className='p-4 flex text-lg items-center border-b'>
                        <span>Add Product</span>
                    </a>
                </NavLink>
            </div>
        </div>
    );
};

export default RightSideBar;