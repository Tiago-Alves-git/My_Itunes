import React from 'react';
import Header from '../Componentes/header';

class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <p>TrybeTunes Album</p>
      </div>
    );
  }
}

export default Album;
