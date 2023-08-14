import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function SimpleBottomNavigation(props) {
  const [value, setValue] = React.useState(0);

  const { handleTheme, theme } = props;

  return (
    <Box sx={ { width: '100%' } } className="BottomNav">
      <BottomNavigation
        showLabels
        value={ value }
        onChange={ (event, newValue) => {
          setValue(newValue);
        } }
      >
        <BottomNavigationAction label="Recents" icon={ <RestoreIcon /> } />
        <BottomNavigationAction label="Favorites" icon={ <FavoriteIcon /> } />
        { theme === 'light' ? (
          <BottomNavigationAction
            label="Theme"
            icon={ <DarkModeIcon /> }
            onClick={ handleTheme }
          />
        ) : (
          <BottomNavigationAction
            label="Theme"
            icon={ <LightModeIcon /> }
            onClick={ handleTheme }
          />
        ) }
      </BottomNavigation>
    </Box>
  );
}

SimpleBottomNavigation.propTypes = {
  handleTheme: PropTypes.any,
}.isRequired;
