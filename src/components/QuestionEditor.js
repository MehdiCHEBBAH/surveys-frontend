import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

function QuestionEditor({data, deleteQuestion, handleQuestionChange}) {
    return (
        <div className='w-full flex flex-row justify-between mb-2'>
            <input
                value={data.question}
                onChange={(e)=>handleQuestionChange(data.sectionId, data.id, e.target.value)}
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-4/5"
                placeholder="Your Question Here"
            />
            <button type="button" onClick={()=>deleteQuestion(data.sectionId, data.id)} className='mr-10'>
                <FaTimes className='text-lg hover:text-red-600' />
            </button>
        </div>
    );
}

QuestionEditor.propTypes = {};

export default QuestionEditor;
