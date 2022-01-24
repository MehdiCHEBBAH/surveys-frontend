import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import BackToHomeButton from './BackToHomeButton';

function NavBar({onSubmit, resultsId}) {
    return (
        <nav className="sticky top-0 z-50 font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-slate-200 shadow-xl w-full">
            <div className="mb-2 sm:mb-0 ">
                <BackToHomeButton />
            </div>
            <div>
                <button type="button" onClick={onSubmit} className="px-10 mx-5 bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Send</button>
                {resultsId !== ""? (<Link to="/results"><button className="px-10 mx-5 bg-gradient-to-tr from-green-600 to-green-900 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Results</button></Link>): ""}
            </div>
        </nav>
    );
}

NavBar.defaultProps = {
    resultsId: "",
}

NavBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onResult: PropTypes.string,
};

export default NavBar;
