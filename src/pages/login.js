/* eslint-disable react/prop-types */
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineAlternateEmail, MdPassword } from 'react-icons/md';
import '../styles/home.css';
import { Button, FormControl, IconButton, InputAdornment,
  InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login(props) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { password, email, userName, handleUserChange, handleClick } = props;

  return (
    <div className="android-small">
      <div className="LoginUserIcon">
        <AiOutlineUser style={ { width: '2em', height: '2em' } } />
      </div>
      <div className="LoginInputs">
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">
            Email
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            startAdornment={
              <InputAdornment position="start">
                <MdOutlineAlternateEmail />
              </InputAdornment>
            }
            label="Email"
            name="email"
            value={ email }
            onChange={ handleUserChange }
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-name">
            UserName
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-name"
            startAdornment={
              <InputAdornment position="start">
                <AiOutlineUser />
              </InputAdornment>
            }
            label="UserName"
            name="userName"
            value={ userName }
            onChange={ handleUserChange }
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ showPassword ? 'text' : 'password' }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={ handleClickShowPassword }
                  onMouseDown={ handleMouseDownPassword }
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            startAdornment={
              <InputAdornment position="start">
                <MdPassword />
              </InputAdornment>
            }
            label="Password"
            name="password"
            onChange={ handleUserChange }
            value={ password }
          />
        </FormControl>
      </div>
      <div className="LoginButtonSubmit">
        <Button
          sx={ {
            textDecoration: 'none',
            textEmphasis: 'Highlight',
            color: 'black',
          } }
          onClick={ handleClick }
        >
          Login
        </Button>
      </div>
    </div>
  );
}
