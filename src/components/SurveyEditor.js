import React from 'react';
import PropTypes from 'prop-types';

import { FaArrowLeft, FaPlus, FaTimes } from 'react-icons/fa';

function SurveyEditor(props) {
    return (
        <div>

            {/* Nav Bar */}
            {/* <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow- sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0 ">
                    <button className="py-2 rounded-md text-2xl tracking-wide"><FaArrowLeft /></button>
                </div>
                <div>
                    <button className="px-10 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Save</button>
                </div>
            </nav> */}

            {/* Rest of page */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-400 flex justify-center items-center w-full py-20">
                <form>
                    <div className="bg-slate-100 px-10 py-8 rounded-lg w-screen shadow-md max-w-3xl">
                        <div className="space-y-4">

                            {/* Survey title + description */}
                            <div className='container mb-10'>
                                <label className="block text-center">
                                    <input
                                        type="text"
                                        className="
                                                    bg-transparent
                                                    text-center text-3xl font-semibold text-gray-600
                                                    border-0 border-b-2 border-gray-200
                                                    focus:ring-0 focus:border-black
                                                "
                                        placeholder="Survey title goes here"
                                    />
                                </label>
                                <label className="block flex justify-center">
                                    <textarea
                                        className=" 
                                                        text-center text-gray-800
                                                        bg-transparent
                                                        mt-4
                                                        block
                                                        w-4/5
                                                        border-0 border-b-2 border-gray-200
                                                        focus:ring-0 focus:border-black
                                                    "
                                        rows="2"
                                        placeholder="Description of your survey goes here"
                                    ></textarea>
                                </label>
                            </div>

                            {/* Card */}
                            <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                                <div className="bg-gradient-to-b from-slate-100 to-slate-50 overflow-hidden shadow-xl rounded-lg">
                                    <div className="px-6 py-4 border-gray-200 font-bold uppercase">
                                        <input
                                            type="text"
                                            className="
                                                    bg-transparent
                                                    text-xl font-semibold text-gray-900
                                                    border-0 border-b-2 border-gray-200
                                                    focus:ring-0 focus:border-black
                                                "
                                            placeholder="Section Title"
                                        />
                                    </div>

                                    <div className="p-6 border-gray-200">
                                        <div className='w-full flex flex-row justify-between mb-2'>
                                            <input
                                                type="text"
                                                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-4/5"
                                                placeholder="Your Question Here"
                                            />
                                            <button className='mr-10'>
                                                <FaTimes className='text-lg hover:text-red-600' />
                                            </button>
                                        </div>

                                        <div className='w-full flex flex-row justify-between mb-2'>
                                            <input
                                                type="text"
                                                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-4/5"
                                                placeholder="Your Question Here"
                                            />
                                            <button className='mr-10'>
                                                <FaTimes className='text-lg hover:text-red-600' />
                                            </button>
                                        </div>

                                        <div className='w-full flex flex-row justify-between mb-2'>
                                            <input
                                                type="text"
                                                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-4/5"
                                                placeholder="Your Question Here"
                                            />
                                            <button className='mr-10'>
                                                <FaTimes className='text-lg hover:text-red-600' />
                                            </button>
                                        </div>

                                    </div>

                                    <div className="pb-6 pl-6 text-left">
                                        <button className="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded uppercase">
                                            Add another Question
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Horizontal line */}
                            <div className=''>
                                <div className="relative flex justify-center items-center w-full border-b-2 border-gray-300 mt-10">
                                    <div className="
                                                    flex flex-row items-center content-center justify-start 
                                                    border-dashed border-2 rounded-full border-gray-300 
                                                    text-gray-900  font-semibold 
                                                    bg-slate-200 
                                                    absolute py-1 px-2
                                                    hover:bg-slate-100 hover:border-solid hover:cursor-pointer">
                                        <FaPlus className="mr-2"/> 
                                        <p>Add new section</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </form>
            </div >
        </div >
    );
}

SurveyEditor.propTypes = {};

export default SurveyEditor;
