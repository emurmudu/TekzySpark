
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthProvider";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAddingToCart, setIsAddingToCart] = useState(false);
    console.log('from productDetails use params id :', id);
    console.log('from productDetails useState product :', product);

    const { loggedInUserEmail } = useContext(AuthContext);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://mission-10-server-7ycrmmizg-emurmudu.vercel.app/productById/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch product details");
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    const addToCart = async () => {
        try {
            setIsAddingToCart(true);
            const response = await fetch(`https://mission-10-server-7ycrmmizg-emurmudu.vercel.app/addToCart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "user-email": loggedInUserEmail,
                },
                body: JSON.stringify({
                    productId: id,
                    quantity: 1,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to add to cart");
            }

            toast("Added to cart successfully", {
                position: toast.POSITION.TOP_CENTER,
            });
        } catch (error) {
            console.error("Error adding to cart:", error);
            toast("Error adding to cart", {
                position: toast.POSITION.TOP_CENTER,
                type: toast.TYPE.ERROR,
            });
        } finally {
            setIsAddingToCart(false);
        }
    };

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : !product ? (
                <p>Product not found</p>
            ) : (
                <div>
                    <div className="flex justify-center items-center min-h-screen flex-grow">
                        <div key={product._id} className="overflow-hidden border rounded-lg">
                            <img src={product.photo} alt={product.name} className="w-full h-auto" />

                            <div className="card-body">
                                <div className="card-title">
                                    <div className="flex flex-row justify-between items-center w-full">
                                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">{product.name}</h2>
                                        <h2 className="text-xs md:text-sm lg:text-base">Rating : {product.rating}</h2>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div>
                                        <h2>Type : {product.type}</h2>
                                        <h2>Price : {product.price}</h2>
                                        <h2>Brand : {product.brand}</h2>
                                    </div>
                                </div>
                                <p className="text-justify">{product.description}</p>
                                <div className="mt-4 ">
                                    <button
                                        className="btn btn-outline dark:btn-neutral dark:bg-gray-800 w-full"
                                        onClick={addToCart}
                                        disabled={isAddingToCart}
                                    >
                                        {isAddingToCart ? "Adding to Cart..." : "Add to Cart"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
