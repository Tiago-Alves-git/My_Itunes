import React from 'react';
import Header from '../Componentes/header';

class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <p>TrybeTunes Profile</p>
      </div>
    );
  }
}

export default Profile;
