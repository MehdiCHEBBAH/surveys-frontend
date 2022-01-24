import PropTypes from 'prop-types';
import Question from './Question';

function Section({ data }) {
    return (

        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-gradient-to-b from-slate-200 to-slate-100 overflow-hidden shadow-xl rounded-lg">
                <div className="px-6 py-4 border-gray-200 font-bold uppercase">
                    <h2 className='bg-transparent text-xl font-semibold text-gray-900'>{data.questions.sectionTitle}</h2>
                </div>

                <div className="p-6 border-gray-200">
                    {
                        Object.keys(data.questions).map((key) => (
                            key != 'sectionTitle' && <Question key={key} data={{id:key, sectionId:data.id, question:data.questions[key]}}/>
                        ))
                    }

                </div>


            </div>
        </div>
    );
}

Section.propTypes = {};

export default Section;
