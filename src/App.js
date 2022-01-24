import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/Pages/HomePage.js';
import SurveyEditor from './components/Pages/SurveyEditor.js'
import SurveyAnswerer from './components/Pages/SurveyAnswerer.js';
import SurveyResults from './components/Pages/SurveyResults.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="create" exact element={<SurveyEditor />} />
                <Route path="survey/:id" exact element={<SurveyAnswerer />} />
                <Route path="results/:id" exact element={<SurveyResults />} />
            </Routes>

        </Router>
    );
}

export default App;
