import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Box, Button, Divider, IconButton, Input, ListItemIcon, Menu,
  MenuItem, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { getUser } from '../services/userAPI';
import Load from './loading';
import '../styles/header.css';

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
    const open = Boolean(anchorEl);
    return (
      loading ? <Load /> : (
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
            <MenuItem onClick={ this.handleClose }>
              <Avatar />
              {' '}
              Profile
            </MenuItem>
            <MenuItem onClick={ this.handleClose }>
              <Avatar />
              {' '}
              My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={ this.handleClose }>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={ this.handleClose }>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={ this.handleClose }>
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
          <div style={ { color: 'black' } }>
            { name }
          </div>
        </div>
      )

    );
  }
}

Header.propTypes = {
  handleUser: PropTypes.any,
}.isRequired;
export default Header;
