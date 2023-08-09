import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Box, Button, Divider, IconButton, Input, ListItemIcon, Menu,
  MenuItem, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Logout, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getUser } from '../services/userAPI';
import '../styles/header.css';
import Load from './loading';

class Header extends React.Component {
  state = {
    name: '',
    loading: true,
    anchorEl: null,
    search: '',
  };

  componentDidMount() {
    this.handleUserName();
  }

  handleUserName = async () => {
    const { name } = await getUser();
    this.setState((prev) => ({
      ...prev,
      name,
      loading: false,
      logged: true,
    }));
  };

  handleClick = (event) => {
    this.setState((prev) => ({
      ...prev,
      anchorEl: event.target,
    }));
  };

  handleClose = () => {
    this.setState((prev) => ({
      ...prev,
      anchorEl: null,
    }));
  };

  handleSearch = (evt) => {
    const { value } = evt.target;
    this.setState((prev) => ({
      ...prev,
      search: value,
    }));
  };

  handleSubmit = () => {
    const { onSubmit } = this.props;
    const { search } = this.state;
    onSubmit(search);
  };

  render() {
    // const url = image;
    const { name, loading, anchorEl, search } = this.state;
    const { handleLogout, logged } = this.props;
    const open = Boolean(anchorEl);
    return (
      loading ? (
        <Load />
      ) : (
        <div className="Header">
          <Box sx={ { display: 'flex', alignItems: 'center', textAlign: 'center' } }>
            <Tooltip title="Account settings">
              <IconButton
                onClick={ this.handleClick }
                size="small"
                sx={ { ml: 2 } }
                aria-controls={ open ? 'account-menu' : undefined }
                aria-haspopup="true"
                aria-expanded={ open ? 'true' : undefined }
              >
                <MenuIcon sx={ { color: 'black' } } />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={ anchorEl }
            id="account-menu"
            open={ open }
            onClose={ this.handleClose }
            onClick={ this.handleClose }
            transformOrigin={ { horizontal: 'right', vertical: 'top' } }
            anchorOrigin={ { horizontal: 'right', vertical: 'bottom' } }
          >
            <Link to="/profile" style={ { textDecoration: 'none', color: 'black' } }>
              <MenuItem onClick={ this.handleClose }>
                <Avatar />
                {' '}
                Profile
              </MenuItem>
            </Link>
            <Link to="/profile/edit" style={ { textDecoration: 'none', color: 'black' } }>
              <MenuItem onClick={ this.handleClose }>
                <Avatar />
                {' '}
                Edit Profile
              </MenuItem>
            </Link>
            <Divider />
            <MenuItem onClick={ this.handleClose }>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={ handleLogout }>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
          <div
            style={ {
              backgroundColor: 'white',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              width: '25em',
            } }
          >
            <Input
              type="text"
              placeholder="Search..."
              inputProps={ { 'aria-label': 'search' } }
              sx={ { width: '100%', marginRight: '20px' } }
              value={ search }
              onChange={ this.handleSearch }
            />
            <Button
              onClick={ this.handleSubmit }
              aria-label="search-button"
              sx={ {
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black',
              } }
            >
              <SearchIcon />
            </Button>
          </div>
          { logged ? (
            <div style={ { color: 'black' } }>
              { name }
            </div>
          ) : (
            <Link to="/login" style={ { display: 'flex' } }>
              {' '}
              <Avatar />
              <Button sx={ { color: 'black' } }> Login </Button>
              {' '}
            </Link>
          ) }
        </div>
      )
    );
  }
}

Header.propTypes = {
  handleUser: PropTypes.any,
}.isRequired;
export default Header;
