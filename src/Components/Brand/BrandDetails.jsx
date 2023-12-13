import { NavLink, useParams } from "react-router-dom";
import Slider from "./Slider";
import { useEffect, useState } from "react";


const BrandDetails = () => {


    // const singleProduct = useLoaderData();
    const { brandName } = useParams();
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(4);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://mission-10-server-eight.vercel.app/product/${brandName}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [brandName]);

    const handleViewMore = () => {
        setVisibleProducts(visibleProducts + 4);
    };

    return (


        <div>
            {/* slider section  */}
            <div className="hidden lg:block container mx-auto text-center mt-4 m-4">
                <Slider></Slider>
            </div>

            {/* products card section  */}
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">{brandName} Products</h1>

                {isLoading ? (
                    <p>Loading...</p>
                ) : products.length === 0 ? (
                    <p className=" flex justify-center items-center md:text-5xl">Product is coming soon!</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {products.slice(0, visibleProducts).map(product => (
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
                                        <NavLink to={`/productDetails/${product._id}`}>
                                            <button className=" btn btn-outline dark:btn-neutral w-full">Details</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* View More button */}
                {products.length > visibleProducts && (
                    <div className="text-center mt-4">
                        <button className="btn btn-outline dark:btn-neutral" onClick={handleViewMore}>
                            View More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BrandDetails;