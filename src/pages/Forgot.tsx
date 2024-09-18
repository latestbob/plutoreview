import React from 'react';
import { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { handleForgotPassword } from '../services/authService';

const Forgot = ():JSX.Element => {

    const [email, setEmail] = useState<string>("");
    
    const[errorMessage, setErroMessage] = useState<string>("");

    const navigate = useNavigate();

    function handleEmailChange(e:React.ChangeEvent<HTMLInputElement>){

        setEmail(e.target.value)
    }

    

    async function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        setErroMessage("");

        

        try {
           await handleForgotPassword(email);
           alert("Reset Password Link has been shared to your mail");

           navigate('/login');
        } catch (err:any) {
               setErroMessage(err.message);
        }   

    }


    return (
        <>
            <section className="flex flex-col justify-center px-5 md:px-0  m-0  overflow-x-hidden bg-blue-100 min-h-screen">

                <div className='bg-white w-full md:w-2/5 rounded-lg min-h-[60vh] md:min-h-[45vh] m-auto py-16 md:py-8'>

                        {errorMessage && ( <div className="p-4 mx-3 mb-4 text-sm text-red-800 rounded-lg text-center bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">Error!</span> {errorMessage}.
                        </div>)}
                    <h2 className="text-center text-xl md:text-2xl font-medium font-sans py-4">Forgot Password</h2>
                    <p className=" font-normal text-sm text-center text-slate-600">Kindly verify your email to reset your password, <br /> reset link will be shared to you</p>



                    <form onSubmit={handleSubmit} className="mt-3 px-5">


                        <div className="form-group py-3">
                            <label className="block text-sm font-medium text-gray-700">Email Address </label>
                            <input
                                onChange={handleEmailChange}
                                type="email"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-200 sm:text-sm"
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="form-group py-3">
                

                           

                            <br />


                            <div className="buttondiv text-center">
                                <button className="btn w-full rounded-md bg-amber-500 py-2 px-3 text-white font-sans font-medium text-base">Verify Email</button>
                            </div>

                            <div className="text-center my-3">
                                <Link to="/login" className="text-sm font-normal font-sans text-blue-600">Back to login</Link>
                            </div>
                            
                        </div>
                                        
                    </form>
                
                </div>


                


            </section>
        </>
    );
}

export default Forgot;