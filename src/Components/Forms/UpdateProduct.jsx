import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const UpdateProduct = () => {



    const { id } = useParams();
    const [productDetails, setProductDetails] = useState({
        name: '',
        brand: '',
        type: '',
        price: 0,
        rating: 0,
        photo: '',
        description: '',
    });

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5001/productById/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product details');
                }
                const data = await response.json();
                setProductDetails(data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, [id]);

    const handleUpdateProduct = async (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const description = form.description.value;

        const updatedProduct = { name, brand, type, price, rating, description, photo };
        console.log(updatedProduct);

        try {
            const response = await fetch(`http://localhost:5001/updateProduct/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            });

            if (!response.ok) {
                throw new Error('Failed to update product');
            }

            console.log('Product updated successfully');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className=" container mx-auto text-center">
            <div className=" p-10 md:p-24">
                <h1 className=" text-xl md:text-3xl font-extrabold mb-4 md:mb-6">Update Product</h1>
                <form onSubmit={handleUpdateProduct}>
                    {/* product name & brand name row */}
                    <div className="flex flex-col md:flex-row mb-3 ">
                        <div className="form-control mb-3 md:mb-0 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" value={productDetails.name} placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <select className="w-full input input-bordered" placeholder="Brand Name" name="brand" value={productDetails.brand} id="">
                                    <option value="Samsung">Samsung</option>
                                    <option value="Apple">Apple</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Google">Google</option>
                                    <option value="Canon">Canon</option>
                                    <option value="DJI">DJI</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    {/* type and price row */}
                    <div className="flex flex-col md:flex-row mb-3">
                        <div className="form-control md:w-1/2 md:mb-0">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <select className="w-full input input-bordered" placeholder="Type" name="type" value={productDetails.type} id="">
                                    <option value="Laptop">Laptop</option>
                                    <option value="Mobile">Mobile</option>
                                    <option value="Smart Watch">Smart Watch</option>
                                    <option value="Camera">Camera</option>
                                    <option value="VR Goggles">VR Goggles</option>
                                    <option value="Mini Drone">Mini Drone</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="price" value={productDetails.price} placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* rating & image url row */}
                    <div className="flex flex-col md:flex-row mb-3">
                        <div className="form-control mb-3 md:mb-0 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="rating" value={productDetails.rating} placeholder="Rating" min='1' max='5' className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" value={productDetails.photo} placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* short description row */}
                    <div className=" mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <textarea className="input input-bordered w-full" name="description" value={productDetails.description} id="" cols="50" rows="4"></textarea>
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Product" className="btn btn-block" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;