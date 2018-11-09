import React from "react";

import Container from "./Container";

import { useHover } from "./hooks";

import "./ArtistList.css";
import HandSign from "./HandSign";

export default function ListItem({ item }) {
  const [ref, isHovered] = useHover();

  return (
    <Container hover={ref} className="artist-container">
      <Container className="name-image">
        <div className="image">
          <img src={item.img} />
        </div>
        <div className="name">{item.name}</div>
      </Container>
      {isHovered && <HandSign className="hand" size={2} />}
    </Container>
  );
}
