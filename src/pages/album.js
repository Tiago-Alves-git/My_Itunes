import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Componentes/header';
import Load from '../Componentes/loading';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  state = {
    musics: null,
    loading: true,
  };

  componentDidMount() {
    this.handleSongs();
  }

  handleSongs = async () => {
    const { match } = this.props;
    const request = await getMusics(match.params.id);
    console.log(request);
    this.setState({
      musics: request,
      loading: false,
    });
  };

  render() {
    const { musics, loading } = this.state;

    return (
      <div data-testid="page-album">
        { loading ? <Load />
          : (
            <>
              <Header />
              <p>TrybeTunes Album</p>
              <div>
                <ul>
                  { musics.map((musicas) => (
                    <li
                      key={ musicas.trackId }
                      data-testid="album-name"
                    >
                      { musicas.wrapperType === 'collection' ? (
                        <>
                          <p>
                            {musicas.artistName}
                          </p>
                          <img
                            key={ musicas.artistName }
                            src={ musicas.artworkUrl100 }
                            alt={ musicas.artistId }
                          />

                        </>
                      ) : (
                        <>
                          <p>
                            {' '}
                            {musicas.artistName}
                            <br />
                            SongTitle :
                            {' '}
                            {musicas.trackName}
                          </p>
                          <img
                            key={ musicas.artistName }
                            src={ musicas.artworkUrl100 }
                            alt={ musicas.artistId }
                          />
                          <audio
                            data-testid="audio-component"
                            src="{previewUrl}"
                            controls
                          >
                            <track kind="captions" />
                            O seu navegador não suporta o elemento
                            {' '}
                            {' '}
                            <code>audio</code>
                            .
                          </audio>

                        </>
                      ) }

                      <p>
                        {musicas.collectionName}
                      </p>
                      <Link to={ `/album/${musicas.collectionId}` }>
                        Favorite
                      </Link>
                    </li>
                  )) }
                </ul>
              </div>

            </>
          ) }
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.any,
}.isRequired;

export default Album;
