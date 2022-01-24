import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar';

const HomePage = (props) => {
    return (
        <div className='w-full h-screen'>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-300 flex justify-center items-center w-full h-full py-20">
                <div className='w-full'>
                    <SearchBar/>
                    <div className="relative mx-auto flex justify-center items-center border-b-2 border-gray-600 mt-10 w-2/6 max-w-md">
                        <div className="
                                                    flex flex-row items-center content-center justify-start 
                                                    text-gray-600  font-bold text-xl bg-transparent
                                                    absolute py-1 px-2">
                            <p className='backdrop-blur-lg'>OR</p>
                        </div>
                    </div>
                    <Link to='/create' class="w-3/6 max-w-xs animate-bounce rounded-lg relative p-4 mx-auto flex text-xl bg-slate-200 text-gray-600 justify-center items-center  mt-10 border-blue-600 hover:bg-blue-200 hover:animate-none border-2">Create a Survey</Link>
                </div>

            </div>
        </div>
    );
};

HomePage.propTypes = {};

export default HomePage;
