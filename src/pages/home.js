import PropTypes from 'prop-types';
import React from 'react';
import Load from '../Componentes/loading';

class Home extends React.Component {
  render() {
    const numeroMinimo = 3;
    const { usuario, handleUserChange, handleClick, loading } = this.props;
    return (
      loading ? <Load /> : (
        <div data-testid="page-login">
          <p>TrybeTunes Home</p>
          <form>
            <label htmlFor="Name">
              Insira aqui o seu nome:
              <input
                data-testid="login-name-input"
                type="text"
                name="usuario"
                id="Name"
                value={ usuario }
                onChange={ handleUserChange }
              />
            </label>
            <label htmlFor="Email">
              Insira aqui o seu Email:
              <input
                type="text"
                name="Email"
                id="Email"
                onChange={ () => { console.log('Meu Email está sendo digitado'); } }
              />
            </label>
            { usuario.length >= numeroMinimo ? (
              <button
                type="button"
                onClick={ handleClick }
                data-testid="login-submit-button"
              >
                Entrar
              </button>)
              : (
                <button
                  disabled
                  type="button"
                  onClick={ handleClick }
                  data-testid="login-submit-button"
                >
                  Entrar
                </button>) }
          </form>

        </div>
      ));
  }
}

Home.propTypes = {
  handleUserChange: PropTypes.func,
  usuario: PropTypes.shape({
    length: PropTypes.number,
  }),
}.isRequired;

export default Home;
