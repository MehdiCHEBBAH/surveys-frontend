import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import PropTypes from 'prop-types';

function BackToHomeButton(props) {
    return (
        <Link to="/">
            <button className="py-2 rounded-md text-2xl tracking-wide">
                <FaArrowLeft />
            </button>
        </Link>
    );
}

BackToHomeButton.propTypes = {};

export default BackToHomeButton;
