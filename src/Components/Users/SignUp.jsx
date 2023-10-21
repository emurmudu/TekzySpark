import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
    const navigate = useNavigate();
    const [signUpError, setSignUpError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = useContext(AuthContext);


    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        if (password.length < 6) {
            setSignUpError('Password length should be 6 or above');
            return;
        }
        else if (!/(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/.test(password)) {
            setSignUpError('Please use at least one special character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError('Please use at least one upper case character');
            return;
        }

        setSignUpError('');
        setSuccess('');


        createUser(email, password)
            .then(result => {
                console.log(result.user)

                const createAt = result.user?.metadata?.creationTime;
                const user = { name, email, password, createAt: createAt };
                fetch('https://mission-10-server-1i8zaou17-emurmudu.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            // alert('Data inserted');
                            toast('SignUp successfully', {
                                position: toast.POSITION.TOP_CENTER,
                            });
                            e.target.reset();
                            navigate("/");
                        }
                    })




                e.target.reset();
                navigate("/");

            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message);
            })

    }



    return (
        <div className=" mx-auto">

            <h2 className=" text-center text-3xl mt-4 mb-4">Please Sign Up</h2>

            <div className="">
                <form onSubmit={handleSignUp} className="card-body w-3/4 md:w-2/4 lg:w-2/5 mx-auto shadow-xl border">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className=" relative">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full mx-auto py-2 px-4" required />
                            <span className="absolute top-4 right-6" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                            </span>
                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline">Sign Up</button>
                        <ToastContainer />
                        {
                            signUpError && <p className=" text-red-600 mt-2">{signUpError}</p>
                        }
                    </div>
                    <p>Have an account? <NavLink className=" font-bold" to="/SignIn">Sign In</NavLink></p>
                </form>



            </div>
        </div>
    );
};

export default SignUp;