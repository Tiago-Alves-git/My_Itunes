import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Load from './loading';

class Header extends React.Component {
  state = {
    name: '',
    loading: false,
  };

  componentDidMount() {
    this.handleUserName();
  }

  handleUserName = async () => {
    this.setState({
      loading: true,
    });
    const { name } = await getUser();
    this.setState({
      name,
      loading: false,
    });
  };

  render() {
    const url = 'https://cdn-icons-png.flaticon.com/512/2480/2480421.png';
    const { name, loading } = this.state;
    return (
      loading ? <Load /> : (
        <header data-testid="header-component" className="Header">
          <div>
            <img src={ url } alt="Imagem Logo" width="300px" height="300px" />
            <div>
              <Link to="/search" data-testid="link-to-search"> Busca </Link>
              <Link to="/favorites" data-testid="link-to-favorites"> Favoritos </Link>
              <Link to="/profile" data-testid="link-to-profile"> Perfil </Link>
            </div>
          </div>
          <div>
            Tiago Tunes!
          </div>
          <p data-testid="header-user-name">
            { name }
          </p>
        </header>
      )

    );
  }
}

Header.propTypes = {
  handleUser: PropTypes.any,
}.isRequired;
export default Header;
