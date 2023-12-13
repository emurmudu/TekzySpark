import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Aos from 'aos';

export const Contact = () => {

    // useEffect(() => {
    //     Aos.init({
    //         duration: 1200,
    //         offset: 200,
    //         easing: 'ease-in-out',
    //     });
    // }, []);


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ahsurlf', 'template_l7gs0wn', form.current, 'PeXh_Ggopqwo0cSK4')
            .then((result) => {
                console.log(result.text);
                toast.success('Email sent successfully!');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                toast.error('Error sending email. Please try again.');
            });
    };



    return (

        <div data-aos="fade-up" data-aos-duration="1200" className=" bg-gray-300 mx-auto dark:text-gray-100 dark:bg-zinc-700">

            <h2 className=" font-bold mb-8 text-center text-xl md:text-2xl lg:text-4xl pt-8 pb-4">Contact Us</h2>

            <div className="pb-8">
                <form ref={form} onSubmit={sendEmail} className="card-body w-3/4 md:w-2/4 lg:w-2/5 mx-auto border-white dark:text-white border shadow-xl">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Name</span>
                        </label>
                        <input type="text" name="from_name" placeholder="Your name" className="input input-bordered border-white dark:bg-zinc-600" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Email</span>
                        </label>
                        <input type="email" name="from_email" placeholder="Your email" className="input input-bordered border-white dark:bg-zinc-600" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Your Message</span>
                        </label>
                        <textarea className='dark:bg-zinc-600 border p-2 rounded-lg' placeholder='Write your message' name="message" id="" cols="30" rows="6"></textarea>

                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" value="Send" className="btn btn-outline dark:btn-neutral dark:text-white">Send</button>
                        <ToastContainer />

                    </div>

                </form>


            </div>
        </div>
    );
};
export default Contact;