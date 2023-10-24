import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const SignIn = () => {

    const navigate = useNavigate();
    const { signInWithUser, signInWithGoogle } = useContext(AuthContext);
    const [userError, setUserError] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setUserError('');


        signInWithUser(email, password)
            .then(result => {
                console.log(result.user)
                const user = {
                    email,
                    lastLogged: result.user?.metadata?.lastSignInTime
                }

                fetch('http://localhost:5001/user', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })


                toast('Login Successful!');
                e.target.reset();
                navigate("/");
            })
            .catch(error => {
                console.error(error)
                setUserError(error.message);
            })
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate("/");
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div className=" mx-auto">

            <h2 className=" text-center text-xl md:text-2xl lg:text-3xl mt-4 mb-4">Please Sign In</h2>

            <div className="">
                <form onSubmit={handleSignIn} className="card-body w-3/4 md:w-2/4 lg:w-2/5 mx-auto dark:text-white border shadow-xl">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="your email" className="input input-bordered dark:bg-zinc-700" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Password</span>
                        </label>
                        <div className=" relative">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full mx-auto py-2 px-4 dark:bg-zinc-700" required />
                            <span className="absolute top-4 right-6" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                            </span>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline dark:btn-neutral dark:text-white">Sign In</button>
                        <ToastContainer />
                        {
                            userError && <p className=" text-red-600 mt-2">{userError}</p>
                        }
                    </div>
                    <p>Not have an account? <NavLink className=" font-bold" to="/signUp">Sign Up</NavLink></p>
                    <p>Login with <button onClick={handleGoogleSignIn} className=" font-bold">Google</button></p>
                </form>


            </div>
        </div>
    );
};

export default SignIn;