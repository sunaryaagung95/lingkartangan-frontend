import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/home';
import Landing from './components/landing';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Logout from './components/logout';
import auth from './services/authService';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />

        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />

            <Route
              path="/home"
              render={(props) => <Home {...props} user={this.state.user} />}
            />
            <Route path="/landing" component={Landing} />

            <Redirect from="/" exact to="/landing" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
