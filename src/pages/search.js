import React from 'react';
import Header from '../Componentes/header';

class Search extends React.Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <p>TrybeTunes Search</p>
      </div>
    );
  }
}

export default Search;
