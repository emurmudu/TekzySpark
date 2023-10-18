import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";


const LeftSideBar = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

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

        <div>
            <div className='px-4 mb-4 '>
                <h2 className=" text-lg md:text-2xl mb-6">SIGN IN WITH</h2>
                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>

            </div>

            <div className='p-4 mb-6 w-full'>
                <h2 className="text-lg md:text-2xl mb-4">FIND US ON</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href="https://www.facebook.com/" target='_blank' rel="noreferrer">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border-x' href="https://twitter.com/" target='_blank' rel="noreferrer">
                    <FaTwitter className='mr-2'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                    <FaInstagram className='mr-2'></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>

            <div className="hidden lg:block">
                <h1 className=" p-4 text-3xl border-b-4 border-t-4 mb-4">FEATURED <br /> PRODUCTS</h1>
                <div className="space-y-4 p-4">
                    <img src={'https://i.ibb.co/PQDzvXJ/watch-1.jpg'} alt="" />
                    <img src={'https://i.ibb.co/jyGrwKq/VR.jpg'} alt="" />
                    <img src={'https://i.ibb.co/kq1LxLt/left-1.jpg'} alt="" />
                </div>
            </div>
        </div>


    );
};

export default LeftSideBar;