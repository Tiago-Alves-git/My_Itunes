import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Album from './pages/album';
import ProfileEdit from './pages/editProfile';
import Favorites from './pages/favoritas';
import Home from './pages/home';
import Profile from './pages/profile';
import Search from './pages/search';
import NotFound from './pages/notFound';
import { createUser } from './services/userAPI';

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
  };

  render() {
    const { userName, loading, logged, password, email } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {logged ? <Redirect to="/search" />
              : (
                <Home
                  userName={ userName }
                  password={ password }
                  email={ email }
                  handleUserChange={ this.handleUserChange }
                  handleClick={ this.handleClick }
                  loading={ loading }

                />
              )}
          </Route>
          <Route path="/search" component={ Search } />
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
