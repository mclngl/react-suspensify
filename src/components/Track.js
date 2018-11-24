import React from 'react';
import Container from './Container';
import Text from './Text';

function Track({name}) {
  return (
    <Container>
      <Text text={name} />
    </Container>
  );
}

export default Track;
