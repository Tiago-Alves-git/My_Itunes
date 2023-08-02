import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../Componentes/header';
import Load from '../Componentes/loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import MediaControlCard from '../Componentes/artistCard';
import '../styles/search.css';

class Home extends React.Component {
  state = {
    artistName: '',
    loading: false,
    searched: null,
    searchedArtist: '',
  };

  handleClick = (artistName) => {
    this.setState((prevState) => ({
      searchedArtist: prevState.artistName,
    }));

    const search = async () => {
      const request = await searchAlbumsAPI(artistName);
      const { data } = request;
      this.setState({
        searched: data,
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
    return (
      <div data-testid="page-search" className="Search">
        { loading ? (
          <>
            <Load />
            <h1> Pesquise um artista! </h1>
          </>
        )
          : (
            <div>
              <Header onSubmit={ this.handleClick } />
              <MediaControlCard
                artistName={ artistName }
                searched={ searched }
                searchedArtist={ searchedArtist }
              />
            </div>
          ) }

      </div>
    );
  }
}

export default Home;
