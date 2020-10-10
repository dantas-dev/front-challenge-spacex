import React from "react";
import { Link, useParams } from "react-router-dom";

import { useQuery, gql } from "@apollo/client";
import { IMissionData, IMissionVar } from "./interfaces";

import { Container, CardBlock, CardLinks } from "./style";

const GET_MISSION = gql`
  query Mission($id: ID!) {
    mission(id: $id) {
      description
      id
      name
      website
      wikipedia
      twitter
    }
  }
`;
const Mission = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<IMissionData, IMissionVar>(
    GET_MISSION,
    {
      variables: {
        id,
      },
    }
  );
  const result = data?.mission;

  if (loading) return <p>Loading...</p>;

  if (error)
    return (
      <p>
        Error {error.message} {error.extraInfo}
      </p>
    );

  return (
    <>
      <Container key={id}>
        <CardBlock>
          <h1> Mission: {result?.name}</h1>
          <h2>{result?.description}</h2>
          <CardLinks>
            <a rel="noopener noreferrer" target="_blank" href={result?.website}>
              <span>{result?.name}</span> Website
            </a>{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={result?.wikipedia}
            >
              <span>{result?.name}</span> Wikipedia
            </a>{" "}
            <a rel="noopener noreferrer" target="_blank" href={result?.twitter}>
              <span>{result?.name}</span> Twitter
            </a>{" "}
          </CardLinks>
          <br />
          <Link to="/">See all missions</Link>
        </CardBlock>
      </Container>
    </>
  );
};

export default Mission;
