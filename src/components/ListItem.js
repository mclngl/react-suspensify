import React from "react";

import Container from "./Container";

import { useHover } from "../hooks";

import "../styles/ArtistList.css";
import HandSign from "./HandSign";
import Text from './Text';
import Img from "./Img";

export default function ListItem({ item }) {
  const [ref, isHovered] = useHover();

  return (
    <Container
      hover={ref}
      className={isHovered ? "artist-container hovered" : "artist-container"}
    >
      <Container className="name-image">
        <Img className="image" source={item.img}></Img>
        <Text className="name" text={item.name}></Text>
      </Container>
      {isHovered && <HandSign className="hand" size={2} />}
    </Container>
  );
}
