import React from 'react';
import Header from '../Componentes/header';

class Favorites extends React.Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <p>TrybeTunes Favorites</p>
      </div>
    );
  }
}

export default Favorites;
