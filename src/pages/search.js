import React from 'react';
import Header from '../Componentes/header';

class Search extends React.Component {
  state = {
    artistName: '',
  };

  handleArtistName = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { artistName } = this.state;
    const numeroMinimo = 2;
    return (
      <div data-testid="page-search" className="Search">
        <Header />
        <p>TrybeTunes Search</p>
        <form>
          <label htmlFor="Artist">
            <input
              type="text"
              name="artistName"
              placeholder="Digite Aqui o nome do Artista"
              id="Artist"
              value={ artistName }
              onChange={ this.handleArtistName }
              data-testid="search-artist-input"
            />
          </label>
          { artistName.length >= numeroMinimo ? (
            <button
              type="button"
              onClick={ this.handleArtistName }
              data-testid="search-artist-button"
            >
              Pesquisar
            </button>)
            : (
              <button
                disabled
                type="button"
                onClick={ this.handleArtistName }
                data-testid="search-artist-button"
              >
                Pesquisar
              </button>) }
        </form>
      </div>
    );
  }
}

export default Search;
