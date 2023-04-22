import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Load from './loading';
import image from '../edited.jpg';

class Header extends React.Component {
  state = {
    name: '',
    loading: true,
  };

  componentDidMount() {
    this.handleUserName();
  }

  handleUserName = async () => {
    const { name } = await getUser();
    this.setState({
      name,
      loading: false,
    });
  };

  render() {
    // const url = image;
    const { name, loading } = this.state;
    return (
      loading ? <Load /> : (
        <header data-testid="header-component" className="Header">
          <div className="headerItems">
            <img
              src={ image }
              alt=""
              className="imageLogo"
            />
            <div>
              <Link to="/search" data-testid="link-to-search"> Busca </Link>
              <Link to="/favorites" data-testid="link-to-favorites"> Favoritos </Link>
              <Link to="/profile" data-testid="link-to-profile"> Perfil </Link>
            </div>
          </div>
          <div className="headerItems">
            <h1>
              Tiago Tunes!
            </h1>
          </div>
          <div className="headerItems">
            <p data-testid="header-user-name">
              { name }
            </p>
          </div>
        </header>
      )

    );
  }
}

Header.propTypes = {
  handleUser: PropTypes.any,
}.isRequired;
export default Header;
