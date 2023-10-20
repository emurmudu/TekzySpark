import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const MyCart = ({ userEmail }) => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await fetch(`http://localhost:5001/getCart/${userEmail}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch cart');
                }
                const data = await response.json();
                setCartItems(data.cart);
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };

        fetchCart();
    }, [userEmail]);
    return (
        // <div className=" container mx-auto text-center mt-4">
        //     <div className="card w-96 bg-base-100 shadow-xl">
        //         <figure><img src={"https://i.ibb.co/rvPRQN2/samsung.jpg"} alt="Shoes" /></figure>
        //         <div className="card-body">
        //             <div className="card-title">
        //                 <div className=" flex flex-row justify-between items-center w-full">
        //                     <h2>Samsung Mobile </h2>
        //                     <h2 className=" text-xs">Rating : 4.8 </h2>
        //                 </div>

        //             </div>
        //             <div className=" text-left">
        //                 <div>
        //                     <h2>Type : Mobile </h2>
        //                     <h2>Price : $800 </h2>
        //                     <h2>Brand : Samsung </h2>
        //                 </div>

        //             </div>
        //             <p className=" text-justify">If a dog chews shoes whose shoes does he choose If a dog chews shoes whose shoes does he choose??</p>
        //             <div className="card-actions justify-between">
        //                 <button>Delete</button>
        //                 <NavLink to='/updateProduct'>
        //                     <button>Update</button>
        //                 </NavLink>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.productId} className="mb-2">
                        {/* Display product details based on the item.productId */}
                        Product ID: {item.productId}, Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyCart;