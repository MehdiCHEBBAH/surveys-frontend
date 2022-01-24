import PropTypes from 'prop-types';
import Question from './Question';

function Section({ data, key }) {
    return (

        <div id={key} className="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-gradient-to-b from-slate-200 to-slate-100 overflow-hidden shadow-xl rounded-lg">
                <div className="px-6 py-4 border-gray-200 font-bold uppercase">
                    <h2 className='bg-transparent text-xl font-semibold text-gray-900'>{data.sectionTitle}</h2>
                </div>

                <div className="p-6 border-gray-200">
                    {
                        Object.keys(data).map((id) => (
                            id!='sectionTitle' && <Question key={`${key}_${id}`} data={data[id]}/>
                        ))
                    }

                </div>


            </div>
        </div>
    );
}

Section.propTypes = {};

export default Section;
