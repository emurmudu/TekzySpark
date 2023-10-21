import { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
    const { productId } = useParams();
    const history = history();
    const [product, setProduct] = useState({
        productName: "",
        brand: "",
        type: "",
        price: 0,
        rating: 0,
        description: "",
        photo: "",
    });

    const handleUpdateProduct = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:5001/updateCartItem/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'user-email': loggedInUserEmail, // Make sure to define loggedInUserEmail
                },
                body: JSON.stringify(product),
            });

            if (!response.ok) {
                throw new Error('Failed to update cart item');
            }

            console.log('Cart item updated successfully');
            // Redirect to the cart page or other action after a successful update
            history.push('/myCart');
        } catch (error) {
            console.error('Error updating cart item:', error);
        }
    };
    return (
        <div className="container mx-auto text-center">
            <div>
                <h1 className="text-xl md:text-3xl font-extrabold mb-4 md:mb-6">Update Product</h1>
                <form onSubmit={handleUpdateProduct}>

                    <div className="flex flex-col md:flex-row mb-3 ">
                        <div className="form-control mb-3 md:mb-0 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <select className="w-full input input-bordered" placeholder="Brand Name" name="brand" id="">
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
                                <select className="w-full input input-bordered" placeholder="Type" name="type" id="">
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
                                <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" />
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
                                <input type="number" name="rating" placeholder="Rating" min='1' max='5' className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
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
                                <textarea className="input input-bordered w-full" name="description" id="" cols="50" rows="4"></textarea>
                            </label>
                        </div>
                    </div>

                    {/* product name & brand name row */}
                    <div className="flex flex-col md:flex-row mb-3">
                        <div className="form-control mb-3 md:mb-0 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="productName"
                                    placeholder="Product Name"
                                    className="input input-bordered w-full"
                                    value={product.productName}
                                    onChange={(e) => setProduct({ ...product, productName: e.target.value })}
                                />
                            </label>
                        </div>
                        {/* ... other form inputs ... */}
                    </div>

                    {/* ... rest of your form fields ... */}

                    <input type="submit" value="Update Product" className="btn btn-block" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
