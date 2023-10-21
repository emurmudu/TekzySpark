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