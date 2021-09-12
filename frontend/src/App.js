import { BrowserRouter,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './components/Screens/LandingPage';
import Notes from './components/Screens/Notes/Notes'
import CreateNote from './components/Screens/Notes/CreateNote'
import Register from './components/Screens/Auth/Register'
import Login from './components/Screens/Auth/Login'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    <Route path="/" component={LandingPage} exact />
    <Route path="/resources" component={Notes} exact />
    <Route path="/create" component={CreateNote} exact />
    <Route path="/register" component={Register} exact />
    <Route path="/login" component={Login} exact />

    </BrowserRouter>
  );
}

export default App;
