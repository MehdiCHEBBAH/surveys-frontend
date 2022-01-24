import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaPlus, FaTimes } from 'react-icons/fa';
import { ReactComponent as Empty } from '../../empty.svg';

import NavBar from '../NavBar';
import Section from '../Section';
import QuestionResults from '../QuestionResults';

const { BACKEND_HOST } = require('../../config.json');

function SurveyResults(props) {
    const { id } = useParams();

    const [survey, setSurvey] = useState({
        "ID": "dsihfbjds fjsd bfjhs djfs ",
        "title": "Survey title",
        "description": "Survey description",
        "createdAt": "2022-01-22T14:55:20.478Z",
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
        "answers": {
            "0": {
                "0": {
                    "true": 1,
                    "false": 1
                }
            },
            "1": {
                "0": {
                    "true": 2,
                    "false": 0
                },
                "1": {
                    "true": 2,
                    "false": 0
                },
                "2": {
                    "true": 0,
                    "false": 2
                },
                "3": {
                    "true": 2,
                    "false": 0
                }
            },
            "2": {
                "0": {
                    "true": 0,
                    "false": 2
                },
                "1": {
                    "true": 2,
                    "false": 0
                }
            }
        }
    });



    useEffect(() => {
        const getData = async () => {
            try {
                let data = await axios.get(`${BACKEND_HOST}/api/v0/surveys/${id}/results`);
                data = await data.data;
                setSurvey({ ...data });
                console.log(data);
            } catch (err) {
                console.log(err)
            }


        }
        getData()
    })
    return (
        <div>

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
                                    <input title="Use this to share the survey" value={survey.ID} disabled className='text-center text-gray-800 h-10 mt-4 bg-white rounded-full max-w-md block w-4/5' />
                                </label>

                            </div>

                            {
                            survey.answers[0][0]['true'] != 0 || survey.answers[0][0]['false'] != 0 ? 
                            <>
                            {Object.keys(survey.questions).map((key) => (
                                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                                    <div className="bg-gradient-to-b from-slate-200 to-slate-100 overflow-hidden shadow-xl rounded-lg">
                                        <div className="px-6 py-4 border-gray-200 font-bold uppercase">
                                            <h2 className='bg-transparent text-xl font-semibold text-gray-900'>{survey.questions[key].sectionTitle}</h2>
                                        </div>

                                        <div className="p-6 border-gray-200">
                                            {
                                                Object.keys(survey.questions[key]).map((idx) => (
                                                    idx != 'sectionTitle' && <QuestionResults key={idx} data={{ question: survey.questions[key][idx], results: survey.answers[key][idx] }} />
                                                ))
                                            }

                                        </div>


                                    </div>
                                </div>
                            ))}
                            </> : 
                            <div>
                                <Empty/>
                            </div>
                            }

                        </div>

                    </div>
                </form>
            </div >
        </div >
    );
}

SurveyResults.propTypes = {};

export default SurveyResults;
