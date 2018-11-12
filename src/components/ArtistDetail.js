import React from 'react';
import axios from 'axios';
import {unstable_createResource as createResource} from 'react-cache';

import Container from './Container';
import Img from './Img';
import Text from './Text';

import '../styles/ArtistDetail.css';

function fetchArtist(id) {
  return axios.get(`/api/artist/${id}`).then(({data}) => data.artist);
}

const artistResource = createResource(fetchArtist);

function ArtistDetail(props) {
  return (
    <React.Suspense fallback={<div />}>
      <ArtistHeader id={props.id} />
    </React.Suspense>
  );
}

function ArtistHeader({id}) {
  const artist = artistResource.read(id);

  return (
    <Container className="artist-detail">
      <Container className="artist-header">
        <Img
          source={artist.img}
          alt={artist.name}
          className="img-header"
        />
        <Text style={{fontSize: '2rem'}} text={artist.name} />
      </Container>
    </Container>
  );
}

export default ArtistDetail;
