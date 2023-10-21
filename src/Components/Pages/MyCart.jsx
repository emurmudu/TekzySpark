import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink } from "react-router-dom";
import UpdateModal from "./UpdateModal";

const MyCart = () => {
    const { loggedInUserEmail } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [updatedCartItem, setUpdatedCartItem] = useState(null);



    const fetchCart = async () => {
        try {
            const response = await fetch(`http://localhost:5001/getCart`, {
                headers: {
                    "user-email": loggedInUserEmail,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch cart');
            }
            const data = await response.json();
            setCartItems(data.cart);
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };

    useEffect(() => {
        fetchCart();
    }, [loggedInUserEmail]);

    const handleDeleteProduct = async (cartItemId) => {
        try {
            const response = await fetch(`http://localhost:5001/deleteCartItem/${cartItemId}`, {
                method: 'DELETE',
                headers: {
                    'user-email': loggedInUserEmail,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete cart item');
            }

            console.log('Cart item deleted successfully');
            fetchCart();
        } catch (error) {
            console.error('Error deleting cart item:', error);
        }
    };

    const handleUpdateProduct = async (cartItemId, updatedQuantity) => {
        try {
            const response = await fetch(`http://localhost:5001/updateCartItem/${cartItemId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'user-email': loggedInUserEmail,
                },
                body: JSON.stringify({ quantity: updatedQuantity }),
            });

            if (!response.ok) {
                throw new Error('Failed to update cart item');
            }

            console.log('Cart item updated successfully');
            fetchCart();
        } catch (error) {
            console.error('Error updating cart item:', error);
        }
    };


    const handleUpdateClick = (cartItem) => {
        setUpdatedCartItem(cartItem);
        setShowUpdateModal(true);
    };

    const handleUpdate = (updatedField) => {
        if (updatedCartItem) {
            handleUpdateProduct(updatedCartItem._id, { fieldToUpdate: updatedField });
        }
    };

    return (


        <div className=" p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

            <UpdateModal
                isOpen={showUpdateModal}
                onClose={() => setShowUpdateModal(false)}
                onUpdate={handleUpdate}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cartItems.map(item => (
                    <div key={item._id} className=" border p-4 rounded-md shadow-md">
                        <img
                            src={item.product.photo}
                            alt={item.product.name}
                            className="w-full h-32 object-cover mb-4"
                        />
                        <h2 className="text-xl font-bold mb-2">{item.product.name}</h2>
                        <p className="text-sm text-gray-500 mb-2">{item.product.brand}</p>
                        <p className="text-sm mb-2">Type: {item.product.type}</p>
                        <p className="text-sm mb-2">Price: {item.product.price}</p>

                        <div className=" flex flex-row gap-2 justify-between mt-3">

                            <button onClick={() => handleUpdateClick(item)} className="btn btn-outline">
                                Update
                            </button>
                            <button onClick={() => handleDeleteProduct(item._id)} className="btn btn-outline">Delete</button>

                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default MyCart;