import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from './components/Utilities/NavBar/NavBar';
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import Projects from './components/Projects/Projects';
import Plans from './components/Services/Plans';
import Services from './components/Services/Services';
import Footer from './components/Utilities/Footer/Footer';
import grayCamo from './assets/images/grayCamo.png';

function App() {
  return (
    <>
      <Router>
        <div className='container-2xl h-full mx-auto'>
          <div className='mx-auto h-full max-w-7x1 '>
            <div className='h-full lg:w-full grid grid-rows-[92px_1fr]'>
              <main className='mx-auto absolute py-0 max-w-7xl px-0 md:px-6 sm:py-4 lg:px-8 w-full overflow-y-scroll'>
                <NavBar />
                <Routes>
                  <Route path='/' element={<Home />} exact />
                  <Route path='/plans' element={<Plans />} />
                  <Route path='/services' element={<Services />} />
                  <Route path='/team' element={<Team />} />
                  <Route path='/projects' element={<Projects />} />
                </Routes>
                <Footer />
              </main>
            </div>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
