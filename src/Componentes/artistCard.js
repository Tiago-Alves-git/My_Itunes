/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import '../styles/search.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Load from './loading';

export default function MediaControlCard(props) {
  const { searched } = props;

  console.log(searched);
  return (
    <div className="CardBoxes">
      { searched
        ? searched.map((musics) => (
          <Card
            orientation="horizontal"
            size="sm"
            key={ musics.id }
            variant="outlined"
            sx={ { minHeight: 200, minWidth: 500 } }
          >
            <Typography level="subtitle-md">
              { musics.artist.name }
            </Typography>
            <img
              style={ { minWidth: 250, minHeight: 100 } }
              src={ `${musics.album.cover}?h=120&fit=crop&auto=format` }
              alt={ musics.title }
            />
            <Box sx={ { whiteSpace: 'nowrap', mx: 1 } }>
              <Typography level="title-md">{musics.title}</Typography>
              <Link to={ `/album/${musics.album.id}` }>
                <Typography level="body-sm">{musics.album.title}</Typography>
              </Link>
            </Box>
          </Card>
        ))
        : (
          <div
            style={ { display: 'flex',
              flexGrow: '1',
              alignSelf: 'center',
              flexDirection: 'column' } }
          >
            <h3> Pesquise o nome de um artista para começar </h3>
            <Load />
          </div>
        ) }
    </div>
  );
}
