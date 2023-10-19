

const UpdateProduct = () => {


    const handleUpdateProduct = event => {
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


    }



    return (
        <div className=" container mx-auto text-center">
            <div className="p-24">
                <h1 className=" text-3xl font-extrabold">Update Product</h1>
                <form onSubmit={handleUpdateProduct}>
                    {/* product name & brand name row */}
                    <div className="md:flex mb-3 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-14">
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
                    <div className="md:flex mb-3">
                        <div className="form-control md:w-1/2">
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
                        <div className="form-control md:w-1/2 ml-14">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* rating & image url row */}
                    <div className="md:flex mb-3">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="rating" placeholder="Rating" min='1' max='5' className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-14">
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
                    <input type="submit" value="Update Product" className="btn btn-block" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;