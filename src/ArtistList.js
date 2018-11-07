import React, { Suspense } from "react";
import { unstable_createResource as createResource } from "react-cache";
import axios from "axios";

import ListItem from "./ListItem";
import Spinner from "./Spinner";

import "./ArtistList.css";

function fetchArtists() {
  return axios.get("/api/artists").then(({ data }) => data.artists);
}

const artistResource = createResource(fetchArtists);

function ArtistContainer() {
  return (
    <div className="artists-container">
      {artistResource.read().map((item, idx) => (
        <ListItem item={item} key={idx} />
      ))}
    </div>
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
