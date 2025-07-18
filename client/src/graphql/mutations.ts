import { gql } from "@apollo/client";

export const CREATE_ACTOR = gql`
  # 1. 変数定義を追加 ($firstName と $lastName を必須のStringとして定義)
  mutation CreateActor($data: ActorCreateInput!) {
    createOneActor(data: $data) {
      actor_id
      first_name
      last_name
    }
  }
`;
