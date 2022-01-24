import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const { BACKEND_HOST } = require('../config.json')
function SearchBar(props) {
    const navigate = useNavigate();
    const [surveyId, setSurveyId] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            let data = await axios.get(`${BACKEND_HOST}/api/v0/surveys/${surveyId}`);
            navigate(`/survey/${surveyId}`);

        } catch (err) {
            alert("There is no survey with that ID.");
            return
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="
                        pt-2 relative mx-auto text-gray-600 w-2/3 max-w-xl
                        transition ease-in-out delay-200 focus-within:-translate-y-1 focus-within:scale-110 duration-400">
                <input
                    value={surveyId}
                    onChange={(e) => setSurveyId(e.target.value)}
                    className="border-2 border-gray-300 bg-white h-20 px-5 pr-16 rounded-lg text-xl w-full focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search for a Survey" />
                <button type="submit" className="absolute right-0 top-0 mr-4 h-full">
                    <FaSearch className="text-2xl text-slate-500" />
                </button>
            </div>
        </form>
    );
}

SearchBar.propTypes = {};

export default SearchBar;
