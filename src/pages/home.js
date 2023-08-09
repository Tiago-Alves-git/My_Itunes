import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Header from '../Componentes/header';
import Load from '../Componentes/loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import MediaControlCard from '../Componentes/artistCard';
import '../styles/search.css';
import SimpleBottomNavigation from '../Componentes/bottomNav';
import billboardAPI from '../services/defaultMusicPage';
import MediaControlCard2 from '../Componentes/artistCard2';
import billboardAPI2 from '../services/defaultMusic2';

class Home extends React.Component {
  state = {
    artistName: '',
    loading: false,
    searched: null,
    searchedArtist: '',
    default_: [],
    default2: [],
  };

  async componentDidMount() {
    const result = await billboardAPI();
    const result2 = await billboardAPI2();
    console.log(result);
    const { data } = result;
    const data2 = result2.data;
    this.setState((prev) => ({
      ...prev,
      default_: data,
      default2: data2,
    }));
  }

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
    const { artistName, loading, searched, searchedArtist, default_,
      default2 } = this.state;
    const { handleLogout, logged } = this.props;
    return (
      loading ? (
        <Load />
      ) : (
        <div data-testid="page-search" className="Search">
          <div>
            <Header
              onSubmit={ this.handleClick }
              handleLogout={ handleLogout }
              logged={ logged }
            />
            <MediaControlCard2
              artistName={ artistName }
              searched={ searched }
              default2={ default2 }
              searchedArtist={ searchedArtist }
            />
            <MediaControlCard
              artistName={ artistName }
              searched={ searched }
              default_={ default_ }
              searchedArtist={ searchedArtist }
            />
            <SimpleBottomNavigation />
          </div>
        </div>
      )

    );
  }
}

Home.propTypes = {
  handleLogout: PropTypes.any,
}.isRequired;

export default Home;
