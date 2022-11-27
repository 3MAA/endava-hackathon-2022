import { useQuery, ApolloClient, InMemoryCache } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import Problem from "./Problem";

export const ALL_PROBLEMS_QUERY = gql`
  query ALL_PROBLEMS_QUERY {
    allProblems {
      id
      name
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProblemsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Problems() {
  const { data, error, loading } = useQuery(ALL_PROBLEMS_QUERY);
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <ProblemsListStyles>
        {data.allProblems.map((problem) => (
          <Problem key={problem.id} problem={problem} />
        ))}
      </ProblemsListStyles>
    </div>
  );
}
