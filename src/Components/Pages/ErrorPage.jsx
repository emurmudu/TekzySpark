import { Link } from "react-router-dom";
// import notFound from '../../../public/404.gif'
import notFound from '../../images/404.gif'

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center h-[70vh] flex-col'>

            <img src={notFound} alt="" />
            <div className='text-center mt-1'>
                <p>Back To Home</p>
                <Link to='/'><button className='btn btn-info mt-2'>Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;