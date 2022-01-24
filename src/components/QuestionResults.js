import { PieChart } from 'react-minimal-pie-chart';

const Question = ({ data }) => {
    return (
        <div className=''>
            <div className="basis-1/2 bg-slate-200 tracking-wide mb-8 border border-black-800 rounded-lg">
                <div className="small-banner w-1 h-20 bg-blue-600 absolute rounded-tl-md"></div>
                <h5 className="text-lg font-semibold pl-6 pt-6 pr-6 pb-2">
                    {data.question}?
                </h5>
                <div className='h-full w-full text-center'>
                    
                    <PieChart className='w-1/3 my-10 m-auto'
                        data={[
                            { key: 'Yes', title: 'Yes', value: data.results['true'], color: '#4b966e' },
                            { key: 'No', title: 'No', value: data.results['false'], color: '#c13c37' },
                        ]}
                    />
                </div>

            </div>
        </div>
    )
};

export default Question;
