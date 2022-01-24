import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';

import PropTypes from 'prop-types';
import QuestionEditor from './QuestionEditor';

function SectionEditor({data, addQuestion, deleteQuestion, handleSectionTitleChange, handleQuestionChange }) {

    return (
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-gradient-to-b from-slate-100 to-slate-50 overflow-hidden shadow-xl rounded-lg">
                <div className="px-6 py-4 border-gray-200 font-bold uppercase">
                    <input
                        value={data.title}
                        onChange={(e)=>{handleSectionTitleChange(data.id, e.target.value)}}
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
                    {
                        data.questions.map((question, idx) => (
                            <QuestionEditor 
                                key={idx} 
                                data={{id:idx, sectionId: data.id, question: question}}
                                deleteQuestion={deleteQuestion}
                                handleQuestionChange={handleQuestionChange}/>
                        ))
                    }


                </div>

                <div className="pb-6 pl-6 text-left">
                    <button onClick={()=>addQuestion(data.id)} type="button" className="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded uppercase">
                        Add another Question
                    </button>
                </div>
            </div>
        </div>
    );
}

SectionEditor.propTypes = {};

export default SectionEditor;
