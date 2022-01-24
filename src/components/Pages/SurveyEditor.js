import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaPlus, FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

import NavBar from '../NavBar';
import SectionEditor from '../SectionEditor';

/**************** Global Vars ****************/
const {BACKEND_HOST} = require('../../config.json')
function SurveyEditor(props) {
    const navigate = useNavigate();

    const [survey, setSurvey] = useState({
        "title": "",
        "description": "",
        "questions": [
            {
                "title": "",
                "questions": [""]
            },
        ]
    })

    /************** Survey Manipulation Functions *******************/
    const addQuestion = (sectionId) => {
        let new_survey = survey;
        new_survey.questions[sectionId].questions.push("")
        setSurvey({...new_survey})
    }
    const deleteQuestion = (sectionId, questionId) => {
        let new_survey = survey;
        if(new_survey.questions[sectionId].questions.length === 1){
            new_survey.questions.splice(sectionId, 1)
        }else{
            new_survey.questions[sectionId].questions.splice(questionId, 1)
        }
        setSurvey({...new_survey})
    }


    const handleSectionTitleChange = (id, content) => {
        let new_survey = survey;
        new_survey.questions[id].title = content;
        setSurvey({...new_survey});
    }


     const handleQuestionChange = (idSec, id, content) => {
        let new_survey = survey;
        new_survey.questions[idSec].questions[id] = content;
        setSurvey({...new_survey});
    }

    const addSection = () => {
        let new_survey = survey;
        new_survey.questions.push({
            "title": "",
            "questions": [""]
        })
        setSurvey({...new_survey})
    }

    const submit = async () => {
        if(survey.title == ''){
            alert("You have to provide a title for the survey.");
            return
        }

        if(survey.questions.length == 0){
            alert("The survey has to contain at least one section.");
            return
        }
        
        survey.questions.forEach(sec=>{
            if(sec.title == ''){
                alert("Section title can't be empty");
                return
            }
            sec.questions.forEach(qst=>{
                if(qst==''){
                    alert("Question can't be empty");
                    return
                }
            })
        })

        try{
            let data = await axios.post(`${BACKEND_HOST}/api/v0/surveys`, survey);
            data = await data.data;
            navigate(`/survey/${data.ID}`);
        }catch(err){
            alert("An internal error just happened!!");
            return
        }
    }
    /****************************************************************/

    return (
        <div>

            {/* Nav Bar */}
            <NavBar onSubmit={submit} />

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
                                        className="bg-transparent
                                                    text-center text-3xl font-semibold text-gray-600
                                                    border-0 border-b-2 border-gray-200
                                                    focus:ring-0 focus:border-black
                                                "
                                        placeholder="Survey title goes here"
                                        value={survey.title}
                                        onChange={(e)=>setSurvey({...survey, title: e.target.value})}
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
                                        value={survey.description}
                                        onChange={(e)=>setSurvey({...survey, description: e.target.value})}
                                    ></textarea>
                                </label>
                            </div>

                            {/* Card */}
                            {survey.questions.map((sec, idx) => (
                                <SectionEditor 
                                    key={idx} 
                                    data={{...sec, id: idx}} 
                                    addQuestion={addQuestion} 
                                    deleteQuestion={deleteQuestion}
                                    handleSectionTitleChange={handleSectionTitleChange}
                                    handleQuestionChange={handleQuestionChange} />
                            ))}

                            {/* Horizontal line */}
                            <div className=''>
                                <div className="relative flex justify-center items-center w-full border-b-2 border-gray-300 mt-10">
                                    <div onClick={addSection} className="
                                                    flex flex-row items-center content-center justify-start 
                                                    border-dashed border-2 rounded-full border-gray-300 
                                                    text-gray-700  font-semibold 
                                                    bg-slate-200 
                                                    absolute py-1 px-2
                                                    hover:bg-slate-100 hover:border-solid hover:cursor-pointer">
                                        <FaPlus className="mr-2" />
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
