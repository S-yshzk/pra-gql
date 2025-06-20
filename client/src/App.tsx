import { useEffect, useState } from "react";
import "./App.css";
import { gql, useLazyQuery } from "@apollo/client";

type actor = {
  actor_id: number;
  first_name: string;
  last_name: string;
};

type film = {
  film_id: number;
  title: string;
};
// GraphQLクエリをサーバーのスキーマに合わせて修正
const GET_ACTORS = gql`
  query {
    # hello
    # user(userId: 1) {
    #   name
    #   age
    #   userId
    #   posts {
    #     userId
    #     discription
    #     postId
    #   }
    # }
    users {
      name
      age
      userId
      posts {
        userId
        discription
        postId
      }
    }
    films(film_id: 1) {
      description
      film_id
      title
      film_actors {
        film_id
        actor_id
      }
    }
    # actors {
    #   actor_id
    #   first_name
    #   last_name
    #   film_id
    #   # film_actors {
    #   #   actor_id
    #   #   film_id
    #   # }
    # }
  }
  # actors {
  #   # サーバー側のFindManyActorResolverが提供するクエリ名
  #   actor_id # ActorモデルのGraphQL型で定義されたフィールド
  #   first_name
  #   last_name
  #   # last_update # 必要であれば他のフィールドも指定
  # }
`;

function App() {
  // ApolloProvider内部でフックを使うためコンポーネントを分割
  // useLazyQueryのクエリとコールバックを修正
  const [getActors, { loading, error, data }] = useLazyQuery(GET_ACTORS, {
    // variables: { userId: 1 },
    // fetchPolicy: "no-cache", // キャッシュを無効化
    onCompleted: (fetchedData) => {
      console.log("Actors fetched:", fetchedData);
    },
    onError: (fetchError) => {
      console.error("Error fetching actors:", fetchError);
    },
  });

  // useEffectを使ってコンポーネントマウント時に一度だけデータを取得する例 (ボタンクリックでも良い)
  // useEffect(() => {
  //   getActors();
  // }, [getActors]);

  if (loading) return <p>Loading actors...</p>;
  if (error) return <p>Error fetching actors: {error.message}</p>;

  return (
    <div>
      <h1>Apollo Client - Actors</h1>
      <button onClick={() => getActors()}>Fetch Actors</button>{" "}
      {/* ボタンにテキストを追加 */}
      {/* 取得したデータを表示 */}
      {data && data.actors && (
        // <ul>
        //   {data.actors.map(
        //     (
        //       actor: actor // actorの型を適切に定義するのが理想
        //     ) => (
        //       <li key={actor.actor_id}>
        //         {actor.first_name} {actor.last_name} (ID: {actor.actor_id})
        //       </li>
        //     )
        //   )}
        // </ul>
        <p>fafdad</p>
      )}
      {!data && !loading && <p>Click the button to fetch actors.</p>}
    </div>
  );
}

export default App;
