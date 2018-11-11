import React from 'react';
import {navigate} from '@reach/router';

import Container from './Container';
import Spinner from './Spinner';
import HandSign from './HandSign';
import Text from './Text';
import Img from './Img';

import {useHover} from '../hooks';

import '../styles/ArtistList.css';

export default function ListItem({item, onClick, curId}) {
  const [ref, isHovered] = useHover();

  async function toDetails() {
    onClick(item.id);
    await navigate(`/a/${item.id}`);
  }

  return (
    <Container
      hover={ref}
      onClick={() => toDetails()}
      className={isHovered ? 'artist-container hovered' : 'artist-container'}
    >
      <Container className="name-image">
        <Img alt={item.name} className="image" source={item.img} />
        <Text className="name" text={item.name} />
      </Container>
      {!curId && isHovered && <HandSign className="hand" size={2} />}
      {curId === item.id && <Spinner className="hand" />}
    </Container>
  );
}
