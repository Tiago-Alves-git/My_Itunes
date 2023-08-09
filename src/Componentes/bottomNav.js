import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [theme, setTheme] = React.useState('light');

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

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
