import HomePage from "./page/Home/HomePage";
import '../src/index.css'
import NavBarLogin from '../src/Components/utility/NavBarLogin'
import Footer from '../src/Components/utility/Footer'
import LoginPage from "./page/Auth/LoginPage";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path="login" element={<LoginPage/>}/>
        </Routes>      
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
