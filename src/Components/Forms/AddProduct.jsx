import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const description = form.description.value;

        const newProduct = { name, brand, type, price, rating, description, photo };
        console.log(newProduct);


        fetch('http://localhost:5001/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                    form.reset();
                }
            })

    }



    return (
        <div className="  container mx-auto text-center">
            <div className=" dark:bg-zinc-800  p-10 md:p-24">
                <h1 className=" text-xl md:text-3xl font-extrabold mb-4 md:mb-6">Add Product</h1>
                <form className="border px-2 pb-2" onSubmit={handleAddProduct}>
                    {/* product name & brand name row */}
                    <div className="flex flex-col md:flex-row mb-3 ">
                        <div className="form-control mb-3 md:mb-0 md:w-1/2">
                            <label className="label">
                                <span className="label-text dark:text-white ">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full dark:bg-zinc-700" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text dark:text-white ">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <select className="w-full input input-bordered dark:bg-zinc-700" placeholder="Brand Name" name="brand" id="">
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
                                <span className="label-text dark:text-white ">Type</span>
                            </label>
                            <label className="input-group">
                                <select className="w-full input input-bordered dark:bg-zinc-700" placeholder="Type" name="type" id="">
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
                                <span className="label-text dark:text-white ">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="price" placeholder="Price" className="input input-bordered w-full dark:bg-zinc-700" />
                            </label>
                        </div>
                    </div>
                    {/* rating & image url row */}
                    <div className="flex flex-col md:flex-row mb-3">
                        <div className="form-control mb-3 md:mb-0 md:w-1/2">
                            <label className="label">
                                <span className="label-text dark:text-white ">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="rating" placeholder="Rating" min='1' max='5' className="input input-bordered w-full dark:bg-zinc-700" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text dark:text-white ">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full dark:bg-zinc-700" />
                            </label>
                        </div>
                    </div>
                    {/* short description row */}
                    <div className=" mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text dark:text-white ">Short Description</span>
                            </label>
                            <label className="input-group">
                                <textarea className="input input-bordered w-full dark:bg-zinc-700" name="description" id="" cols="50" rows="4"></textarea>
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-block dark:btn-neutral btn-outline" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;