
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5001/productById/${id}`);
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

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : !product ? (
                <p>Product not found</p>
            ) : (
                <div>
                    <div className=" flex justify-center items-center min-h-screen flex-grow">

                        <div key={product._id} className="overflow-hidden border rounded-lg">
                            <img
                                src={product.photo}
                                alt={product.name}
                                className="w-full h-auto"
                            />

                            <div className="card-body">
                                <div className="card-title">
                                    <div className=" flex flex-row justify-between items-center w-full">
                                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">{product.name} </h2>
                                        <h2 className=" text-xs md:text-sm lg:text-base">Rating : {product.rating} </h2>
                                    </div>

                                </div>
                                <div className=" text-left">
                                    <div>
                                        <h2>Type : {product.type} </h2>
                                        <h2>Price : {product.price} </h2>
                                        <h2>Brand : {product.brand} </h2>
                                    </div>

                                </div>
                                <p className=" text-justify">{product.description}</p>
                                <div className=" mt-4">

                                    <button className=" btn btn-outline w-full">Add to Cart</button>


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
