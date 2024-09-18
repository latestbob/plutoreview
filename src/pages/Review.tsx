import React from 'react';
import review from '../assets/review.jpg'
import Stepper from '../components/Stepper';
import { Link } from 'react-router-dom';
import { motion, spring } from 'framer-motion';

const Review = ():JSX.Element => {

    return (
        <>
            <section className=" min-h-screen w-full bg-white py-2 overflow-auto">

               


                <div className="bg-white w-3/4 m-auto">

                        <Stepper />
               


                        <motion.div 
                             initial={{ opacity: 0, y:-100 }}
                             animate={{ opacity: 1 , y:0}}
                             transition={{delay:1, duration:1, type:'spring'}}
                        >
                        <h3 className="text-lg md:text-2xl font-bold mt-10 font-sans text-black text-center">🎉 Woohoo! Exclusive 5% OFF Just for You! 🎉</h3>
                            <p className="text-center text-sm px-1 my-5 md:px-10 md:text-base font-normal ">
                            Hey, Gorgeous! 💅✨ <br /> <br />

                            We LOVE our customers, so here’s something special! 🛍️ Leave a review on our Google Review Page and enjoy 5% OFF your next purchase! 🎁✨

It’s quick and easy—just follow the steps and treat yourself! 😍🌟
                              

</p>

                        </motion.div>
                       


                        <motion.div
                             initial={{ opacity: 0, x:-100 }}
                             animate={{ opacity: 1 , x:0}}
                             transition={{delay:1.1, duration:1.3, type:'spring'}}
                        className="w-[95%] md:w-[70%] min-h-[50vh] mx-auto mt-10 mb-16">
                            <img src={review} alt="" className="rounded-lg block md:scale-95 text-center" />

                            
                            <br />
                           
                         
                          
                           
                        </motion.div>
                        

                        <Link to="/next" className="fixed bottom-0 left-0 w-full bg-green-700 text-white py-3 cursor-pointer">
                
                <p className="text-center text-sm  md:text-lg md:font-bold font-sans">GET STARTED</p>
            </Link>


                    
                        
                </div>

            </section>
        </>
    );

}

export default Review;