import React from "react";
import { Link } from "react-router-dom";

import { Container, CardBlock } from "./style";

import { useQuery, gql } from "@apollo/client";
import { IMissionsData } from "./interfaces";

const GET_MISSIONS = gql`
  query Missions {
    missions {
      name
      description
      id
    }
  }
`;

const DashBoard = () => {
  const { loading, error, data } = useQuery<IMissionsData, null>(GET_MISSIONS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;
  return (
    <>
      <Container>
        {data?.missions.map(({ name, description, id }) => (
          <>
            <CardBlock key={id}>
              <h1>
                {" "}
                Mission: <span>{name}</span>
              </h1>
              <h2>{description.substr(0, 195)} ...</h2>
              <Link to={`/${id}`}>See more</Link>
            </CardBlock>
          </>
        ))}
      </Container>
    </>
  );
};

export default DashBoard;
