import React, { Suspense } from "react";
import { unstable_createResource as createResource } from "react-cache";
import axios from "axios";

import Container from "./Container";
import ListItem from "./ListItem";
import Spinner from "./Spinner";

import "../styles/App.css";
import "../styles/ArtistList.css";

function fetchArtists() {
  return axios.get("/api/artists").then(({ data }) => data.artists);
}

const artistResource = createResource(fetchArtists);

function ArtistContainer() {
  return (
    <Container className="artists-container">
      {artistResource.read().map((item, idx) => (
        <ListItem item={item} key={idx} />
      ))}
    </Container>
  );
}

function ArtistList() {
  return (
    <Suspense maxDuration={0} fallback={<Spinner />}>
      <ArtistContainer />
    </Suspense>
  );
}

export default ArtistList;
