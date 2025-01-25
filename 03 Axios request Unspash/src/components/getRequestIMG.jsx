import React from "react";
import axios from "axios";

const getRequestIMG = async (event) => {
  const respons = await axios.get(`https://api.unsplash.com/search/photos`, {
    headers: {
      Authorization: "Client-ID HaxPojQEQXyxgM5CX7Rng7IXOfvxhxEPGlQAm7FohpA",
    },
    params: {
      query: event,
    },
  });
  return respons.data.results;
};

export default getRequestIMG;
