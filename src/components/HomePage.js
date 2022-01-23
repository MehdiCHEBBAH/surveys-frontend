import React from 'react';
import PropTypes from 'prop-types';

import { FaSearch } from 'react-icons/fa';
const HomePage = (props) => {
    return (
        <div className='w-full h-screen'>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-300 flex justify-center items-center w-full h-full py-20">
                <div className='w-full'>
                    <div className="
                                pt-2 relative mx-auto text-gray-600 w-2/3 max-w-xl
                                transition ease-in-out delay-200 focus-within:-translate-y-1 focus-within:scale-110 duration-400
                                ">
                        <input className="border-2 border-gray-300 bg-white h-20 px-5 pr-16 rounded-lg text-xl w-full focus:outline-none"
                            type="search" name="search" placeholder="Search for a Survey" />
                        <button type="submit" className="absolute right-0 top-0 mr-4 h-full">
                            <FaSearch className="text-2xl text-slate-500" />
                        </button>
                    </div>
                    <div className="relative mx-auto flex justify-center items-center border-b-2 border-gray-600 mt-10 w-2/6 max-w-md">
                        <div className="
                                                    flex flex-row items-center content-center justify-start 
                                                    text-gray-600  font-bold text-xl bg-transparent
                                                    absolute py-1 px-2">
                            <p className='backdrop-blur-lg'>OR</p>
                        </div>
                    </div>
                    <button class="animate-bounce rounded-lg relative p-4 mx-auto flex text-xl bg-slate-200 text-gray-600 justify-center items-center  mt-10 border-blue-600 hover:bg-blue-200 hover:animate-none border-2">Create a Survey</button>
                </div>

            </div>
        </div>
    );
};

HomePage.propTypes = {};

export default HomePage;
