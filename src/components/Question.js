import PropTypes from 'prop-types';

const Question = ({ data, toggleAnswer }) => {
    return (
        <div className='w-full flex flex-row justify-between mb-2'>
            <p className='px-4 py-2 w-4/5'>{data.question}?</p>
            <div>
                <label htmlFor={`s${data.sectionId}q${data.id}`} className="flex items-center cursor-pointer relative mb-4">
                    <input
                        onChange={(e) => { toggleAnswer(data.sectionId, data.id, e.currentTarget.checked) }}
                        type="checkbox"
                        id={`s${data.sectionId}q${data.id}`}
                        className="sr-only" />
                    <div className="toggle-bg bg-gray-400 h-7 w-12 rounded-full"></div>
                </label>
            </div>
        </div>
    )
};

Question.propTypes = {
    toggleAnswer: PropTypes.func.isRequired,
};

export default Question;
