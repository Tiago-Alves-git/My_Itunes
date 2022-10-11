import PropTypes from 'prop-types';
import React from 'react';

class ArtistCard extends React.Component {
  render() {
    const { music } = this.props;
    return (
      <div>
        { console.log(music) }
      </div>
    );
  }
}

ArtistCard.propTypes = {
  music: PropTypes.shape({
    filter: PropTypes.func,
  }),
}.isRequired;
export default ArtistCard;
