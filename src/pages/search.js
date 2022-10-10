import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Componentes/header';
import Load from '../Componentes/loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  state = {
    artistName: '',
    loading: false,
    searched: null,
    searchedArtist: '',
  };

  handleArtistName = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { artistName } = this.state;
    this.setState((prevState) => ({
      searchedArtist: prevState.artistName,
    }));

    const search = async () => {
      const request = await searchAlbumsAPI(artistName);
      this.setState({
        searched: request,
      });
      this.setState({
        artistName: '',
        loading: false,
      });
    };
    this.setState({
      artistName: '',
      loading: true,
    }, search);
  };

  render() {
    const { artistName, loading, searched, searchedArtist } = this.state;
    const numeroMinimo = 2;
    return (
      <div data-testid="page-search" className="Search">
        { loading ? <Load />
          : (
            <>
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
                {artistName.length >= numeroMinimo ? (
                  <button
                    type="button"
                    onClick={ this.handleClick }
                    data-testid="search-artist-button"
                  >
                    Pesquisar
                  </button>)
                  : (
                    <button
                      disabled
                      type="button"
                      onClick={ this.handleClick }
                      data-testid="search-artist-button"
                    >
                      Pesquisar
                    </button>)}
              </form>
              { searched && searched.length > 0 ? (
                <>
                  <p>
                    {' '}
                    {`Resultado de álbuns de: ${searchedArtist}`}
                    {' '}
                  </p>
                  <div>
                    { searched.map((album) => (
                      <div
                        key={ album.collectionId }

                      >
                        <p>
                          {album.artistName}
                          {' '}
                        </p>
                        <p>
                          {album.collectionName}
                        </p>
                        <Link
                          to={ `/album/${album.collectionId}` }
                          data-testid={ `link-to-album-${album.collectionId}` }
                        >
                          <img
                            key={ album.artistName }
                            src={ album.artworkUrl100 }
                            alt={ album.artistId }
                          />
                        </Link>
                      </div>
                    )) }
                  </div>

                </>
              ) : searched && (

                <p>
                  {' '}
                  Nenhum álbum foi encontrado
                  {' '}
                </p>
              ) }
            </>
          ) }

      </div>
    );
  }
}

export default Search;
