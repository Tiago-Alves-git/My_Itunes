import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import '../styles/profile.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '@mui/material';
import { getUser } from '../services/userAPI';

class Profile extends React.Component {
  state = {
    name: '',
    description: '',
    email: '',
    image: '',
  };

  componentDidMount() {
    this.handleUserName();
  }

  handleUserName = async () => {
    const { name, description, email, image } = await getUser();
    this.setState((prev) => ({
      ...prev,
      name,
      description,
      email,
      image,
    }));
  };

  render() {
    const { name, email, description, image } = this.state;
    return (
      <div className="ProfileFields">
        <div style={ { display: 'flex', alignItems: 'center' } }>
          <img src={ image } alt="Profile" />
        </div>
        <div style={ { display: 'flex', alignItems: 'center' } }>
          <AiOutlineUser style={ { width: '2em', height: '2em' } } />
          <h6>
            {' '}
            Nome de perfil:
            {' '}
            { name }
            {' '}
          </h6>
        </div>
        <div style={ { display: 'flex', alignItems: 'center' } }>

          <MdOutlineAlternateEmail style={ { width: '2em', height: '2em' } } />
          <h6>
            {' '}
            Seu email principal:
            {' '}
            { email }
            {' '}
          </h6>
        </div>
        <div style={ { display: 'flex', alignItems: 'center' } }>
          <AiOutlineUser style={ { width: '2em', height: '2em' } } />
          <h6>
            {' '}
            Descrição de perfil:
            {' '}
            { description === ''
              ? `Sem descrições por enquanto. Que tal editar o perfil
              e nos contar um pouco mais sobre você?` : description }
            {' '}
          </h6>
        </div>
        <div>
          <Link to="/profile/edit">
            <Button> Editar Perfil </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Profile;
