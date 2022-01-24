import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaPlus, FaTimes } from 'react-icons/fa';

import NavBar from '../NavBar';
import Section from '../Section';

const { BACKEND_HOST } = require('../../config.json');
/************** Survey Functions *******************/
const onSubmit = () => {

}
/****************************************************************/

function SurveyAnswerer(props) {
    const { id } = useParams();

    const [survey, setSurvey] = useState({
        "ID": "",
        "title": "",
        "description": "",
        "questions": {
            "0": {
                "0": "",
                "sectionTitle": ""
            }
        },
        "createdAt": "",
        "sharedURL": ""
    });

    const [answers, setAnswers] = useState()

    useEffect(() => {
        const getData = async () => {
            let data = await axios.get(`${BACKEND_HOST}/api/v0/surveys/${id}`);
            data = await data.data;
            setSurvey({ ...data });

        }
        getData()
    })

    const onSubmit = () => {

    }

    return (
        <div>

            {/* Nav Bar */}
            <NavBar onSubmit={onSubmit} resultsId={survey.ID} />

            {/* Rest of page */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full py-20">
                <form>
                    <div className="bg-slate-200 px-10 py-8 rounded-lg w-screen shadow-md max-w-3xl">
                        <div className="space-y-4">

                            {/* Survey title + description */}
                            <div className='container mb-10'>
                                <label className="block text-center">
                                    <h1 className='bg-transparent text-center text-3xl font-semibold text-gray-800'>{survey.title}</h1>
                                </label>
                                <label className="block flex justify-center">
                                    <p className='text-center text-gray-800 bg-transparent mt-4 block w-4/5'>{survey.description}</p>
                                </label>

                                <label className="block flex justify-center">
                                    <input title="Use this to share the survey" value={survey.ID} disabled className='text-center text-gray-800 h-10 mt-4 bg-white rounded-full max-w-md block w-4/5'/>
                                </label>

                            </div>

                            {Object.keys(survey.questions).map((key) => (
                                <Section key={key} data={{ id: key, questions: { ...survey.questions[key] }}} />
                            ))}

                        </div>

                    </div>
                </form>
            </div >
        </div >
    );
}

SurveyAnswerer.propTypes = {};

export default SurveyAnswerer;
