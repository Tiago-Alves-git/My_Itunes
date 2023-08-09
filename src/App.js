import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Album from './pages/album';
import ProfileEdit from './pages/editProfile';
import Favorites from './pages/favoritas';
import Profile from './pages/profile';
import NotFound from './pages/notFound';
import { createUser } from './services/userAPI';
import Login from './pages/login';
import Home from './pages/home';

class App extends React.Component {
  state = {
    userName: '',
    email: '',
    password: '',
    logged: false,
    loading: false,
    // signUp: [],
  };

  handleUserChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { userName, email } = this.state;

    const create = () => {
      createUser({
        name: userName,
        email,
      }).then(() => {
        this.setState({
          loading: false,
          logged: true,
        });
      });
    };
    this.setState({
      loading: true,
    }, create);
    History.push('/');
  };

  handleLogout = () => {
    localStorage.removeItem('user');
    this.setState({
      logged: false,
    });
  };

  render() {
    const { userName, loading, logged, password, email } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login
              userName={ userName }
              password={ password }
              email={ email }
              handleUserChange={ this.handleUserChange }
              handleClick={ this.handleClick }
              loading={ loading }
            />
          </Route>
          <Route path="/">
            <Home
              handleLogout={ this.handleLogout }
              logged={ logged }
            />
          </Route>
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
