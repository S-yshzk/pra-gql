import { gql } from "@apollo/client";

export const GET_FILM_ACTOS = gql`
  query getFilmActorInfo($filmId: Int!) {
    films(where: { film_id: { equals: 1 } }) {
      description
      film_id
      title
      film_actor {
        film_id
        actor_id
        actor {
          actor_id
          first_name
          last_name
        }
      }
    }
  }
`;

export const GET_ACTOR = gql`
  query getActor($actorId: Int!) {
    actor(where: { actor_id: $actorId }) {
      actor_id
      first_name
      last_name
    }
  }
`;
