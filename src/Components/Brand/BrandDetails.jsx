import { NavLink } from "react-router-dom";


const BrandDetails = () => {
    return (
        <div className=" container mx-auto text-center m-4">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={"https://i.ibb.co/rvPRQN2/samsung.jpg"} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-title">
                        <div className=" flex flex-row justify-between items-center w-full">
                            <h2>Samsung Mobile </h2>
                            <h2 className=" text-xs">Rating : 4.8 </h2>
                        </div>

                    </div>
                    <div className=" text-left">
                        <div>
                            <h2>Type : Mobile </h2>
                            <h2>Price : $800 </h2>
                            <h2>Brand : Samsung </h2>
                        </div>

                    </div>
                    <p className=" text-justify">If a dog chews shoes whose shoes does he choose If a dog chews shoes whose shoes does he choose??</p>
                    <div className="card-actions justify-between">
                        <NavLink to='/productDetails'>
                            <button>Details</button>
                        </NavLink>
                        <NavLink to='/updateProduct'>
                            <button>Update</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandDetails;