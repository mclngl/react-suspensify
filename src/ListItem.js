import React from "react";

import "./ArtistList.css";

export default function ListItem({ item }) {
  return (
    <div className="artist-container">
      <div className="image">
        <img src={item.img} />
      </div>
      <div className="name">{item.name}</div>
    </div>
  );
}
