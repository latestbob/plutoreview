import React from 'react';
import { useState } from 'react';
import { handleLogin } from '../services/authService';
import { useNavigate, Link } from 'react-router-dom';

const Login = ():JSX.Element => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const[showPassword, setShowPassword] = useState<boolean>(false);
    const[errorMessage, setErroMessage] = useState<string>("");

    const navigate = useNavigate();

    function handleEmailChange(e:React.ChangeEvent<HTMLInputElement>){

        setEmail(e.target.value)
    }

    function handlePasswordChange(e:React.ChangeEvent<HTMLInputElement>){

        setPassword(e.target.value)
    }


    async function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        setErroMessage("");

        try {
            await handleLogin(email, password);
            navigate('/dashboard');

        } catch (err:any) {
               setErroMessage(err.message);
        }   

    }


    return (
        <>
            <section className="flex flex-col justify-center px-5 md:px-0  m-0  overflow-x-hidden bg-blue-100 min-h-screen">

                <div className='bg-white w-full md:w-2/5 rounded-lg min-h-[60vh] md:min-h-[50vh] m-auto py-16 md:py-8'>

                        {errorMessage && ( <div className="p-4 mx-3 mb-4 text-sm text-red-800 rounded-lg text-center bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">Error!</span> {errorMessage}.
                        </div>)}
                    <h2 className="text-center text-xl md:text-2xl font-medium font-sans">Login To Dashboard</h2>



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
                            <label className="block text-sm font-medium text-gray-700">Secured Password</label>
                            <input
                                onChange={handlePasswordChange}
                                type={showPassword ? 'text' : 'password'}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-200 sm:text-sm"
                                placeholder="Enter your password"
                            />

                            <div className="toggle my-3">
                            <input type="checkbox" onChange={function(){
                                setShowPassword(!showPassword)
                            }} checked={showPassword} className='text-amber-500 ' /> <span className="px-4 text-sm">{showPassword ? 'Hide Password' : 'Show Password'}</span>
                            </div>


                            <br />


                            <div className="buttondiv text-center">
                                <button className="btn w-full rounded-md bg-amber-500 py-2 px-3 text-white font-sans font-medium text-base">Login To Dashboard</button>
                            </div>

                            <div className="text-center my-3">
                                <Link to="/forgot" className="text-sm font-normal font-sans text-blue-600">Forgot Password</Link>
                            </div>
                            
                        </div>
                                        
                    </form>
                
                </div>


                


            </section>
        </>
    );
}

export default Login;