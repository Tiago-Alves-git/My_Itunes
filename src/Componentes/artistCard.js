/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import '../styles/search.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function MediaControlCard(props) {
  const { searched, default_ } = props;

  return (
    <>
      <Typography
        sx={ {
          textAlign: 'center',
          margin: '10px',
        } }
      >
        Musicas recomendadas
        <br />
        Busque na barra de pesquisa para novos resultados.
      </Typography>
      <div className="CardBoxes">
        {searched
          ? searched.map((musics) => (
            <Card
              orientation="horizontal"
              size="sm"
              key={ musics.id }
              variant="outlined"
              className="cardBox"
              sx={ { minHeight: 200, minWidth: 300 } }
            >
              <Typography level="subtitle-md">
                {musics.artist.name}
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
          : default_.map((musicas) => (
            <Card
              orientation="horizontal"
              size="sm"
              key={ musicas.id }
              variant="outlined"
              className="cardBox"
              sx={ { minHeight: 200, minWidth: 300 } }
            >
              <Typography level="subtitle-md">
                {musicas.artist.name}
              </Typography>
              <img
                style={ { minWidth: 250, minHeight: 100 } }
                src={ `${musicas.album.cover}?h=120&fit=crop&auto=format` }
                alt={ musicas.title }
              />
              <Box sx={ { whiteSpace: 'nowrap', mx: 1 } }>
                <Typography level="title-md">{musicas.title}</Typography>
                <Link to={ `/album/${musicas.album.id}` }>
                  <Typography level="body-sm">{musicas.album.title}</Typography>
                </Link>
              </Box>
            </Card>
          ))}
      </div>

    </>
  );
}
