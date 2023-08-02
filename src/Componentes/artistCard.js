/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Load from './loading';
import '../styles/search.css';

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
            key={ musics.collectionId }
            variant="outlined"
            sx={ { minHeight: 200, minWidth: 500 } }
          >
            <img
              style={ { minWidth: 250, minHeight: 100 } }
              src={ `${musics.artworkUrl100}?h=120&fit=crop&auto=format` }
              alt={ musics.collectionName }
            />
            <Box sx={ { whiteSpace: 'nowrap', mx: 1 } }>
              <Typography level="title-md">{musics.artistName}</Typography>
              <Typography level="body-sm">{musics.collectionName}</Typography>
            </Box>
          </Card>
        ))
        : <Load /> }
    </div>
  );
}
