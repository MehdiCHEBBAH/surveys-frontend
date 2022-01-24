import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';


import NavBar from '../NavBar';
import Section from '../Section';

import { FaArrowLeft, FaPlus, FaTimes } from 'react-icons/fa';

    /************** Survey Functions *******************/
    const onSubmit = () => {

    }
    /****************************************************************/

function SurveyAnswerer(props) {
    const [survey, setSurvey] = useState({
        "ID": "af84b5aa-35ce-4be5-8a86-81d46befaea6",
        "title": "Survey title",
        "description": "Survey description",
        "questions": {
            "0": {
                "0": "first question",
                "sectionTitle": "This is the first section"
            },
            "1": {
                "0": "first question",
                "1": "second question",
                "2": "Third question",
                "3": "Fourth question",
                "sectionTitle": "This is the second section"
            },
            "2": {
                "0": "first question",
                "1": "another question",
                "sectionTitle": "This is the second three"
            }
        },
        "createdAt": "2022-01-22T14:55:20.478Z",
        "sharedURL": "/api/v0/surveys/af84b5aa-35ce-4be5-8a86-81d46befaea6"
    });

    const onSubmit = () => {

    }

    return (
        <div>

            {/* Nav Bar */}
            <NavBar onClickSend={onSubmit} resultsId={'sakdak'} />

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
                            </div>

                            {Object.keys(survey.questions).map((key) => (
                                <Section key={`section_${key}`} data={survey.questions[key]} />
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
