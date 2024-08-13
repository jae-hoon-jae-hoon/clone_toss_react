import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Home from './pages/Home';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/clone_toss_react" element={<Home />} />

                {/* Subpage */}
                {/* <Route path="/subpage" element={<SubPage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App;