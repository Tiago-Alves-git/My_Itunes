/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import '../styles/search.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function MediaControlCard2(props) {
  const { default2 } = props;

  return (
    <div className="CardBoxes">
      { default2.map((musicas) => (
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
      )) }
    </div>
  );
}
