import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Footer from './Components/Footer/Footer';


import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Doctors from './Pages/Doctors/Doctors/Doctors';
import Home from './Pages/Home/Home/Home';
import ServiceDetail from './Pages/Home/Services/ServiceDetails/ServiceDetail/ServiceDetail';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/item/:itemId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/doctor">
              <Doctors></Doctors>
            </Route>
            <PrivateRoute exact path="/appoinment">
              <Appointment></Appointment>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
