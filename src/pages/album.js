import PropTypes from 'prop-types';
import React from 'react';
import Header from '../Componentes/header';
import Load from '../Componentes/loading';
import getMusics from '../services/musicsAPI';
import { addSong } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  state = {
    musics: null,
    loading: true,
    favoritas: {},
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

  handleFavoriteCheck = async (event, musicas) => {
    this.setState({
      loading: true,
    });
    await addSong(musicas);
    this.setState({
      loading: false,
    });
    const { favoritas } = this.state;
    this.setState(({
      favoritas: { ...favoritas, [event.target.name]: event.target.checked },
    }));
  };

  render() {
    const { musics, loading, favoritas } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        { loading ? <Load />
          : (
            <>
              <p>TrybeTunes Album</p>
              <div>

                <p data-testid="artist-name">
                  {' '}
                  {musics[0].artistName}
                </p>
                <p data-testid="album-name">
                  Album :
                  {' '}
                  {musics[0].collectionName}
                </p>
                <img
                  src={ musics[0].artworkUrl100 }
                  alt={ musics[0].artistId }
                />
                <ul>
                  { musics.filter((album, index) => index > 0)
                    .map((musicas) => (

                      <li
                        key={ musicas.trackId }
                      >
                        <div>
                          {' '}
                          {musicas.artistName}
                          <p>
                            {' '}
                            {musicas.trackName}
                          </p>
                        </div>
                        <img
                          src={ musicas.artworkUrl100 }
                          alt={ musicas.artistId }
                        />
                        <audio data-testid="audio-component" src="{previewUrl}" controls>
                          <track kind="captions" />
                          O seu navegador não suporta o elemento
                          {' '}
                          {' '}
                          <code>audio</code>
                          .
                        </audio>
                        <label htmlFor={ `favorite-track-${musicas.trackId}` }>
                          <input
                            data-testid={ `checkbox-music-${musicas.trackId}` }
                            type="checkbox"
                            name={ `favorite-track-${musicas.trackId}` }
                            id={ `favorite-track-${musicas.trackId}` }
                            checked={ favoritas[`favorite-track-${musicas.trackId}`] }
                            onChange={ (e) => this.handleFavoriteCheck(e, musicas) }
                          />
                          Favorita
                        </label>
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
