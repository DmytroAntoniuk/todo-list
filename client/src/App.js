    import { Route, Routes } from 'react-router-dom';
    import './App.scss';
    import AuthPage from './pages/AuthPage/AuthPage';
    import Navbar from './components/Navbar';

    function App() {
        return (
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/login" element={<AuthPage />} />
              <Route path="/registration" element={<AuthPage />} />
              <Route path="*" element={<AuthPage />} />
            </Routes>
          </div>
        );
      }

    export default App;
