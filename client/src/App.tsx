import { useEffect, useState } from "react";
import "./App.css";
import { gql, useLazyQuery } from "@apollo/client";
import { GET_FILM_ACTOS } from "./graphql/query";
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
    films(where: { film_id: { equals: 1 } }) {
      # <--- このように修正する
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

function App() {
  // ApolloProvider内部でフックを使うためコンポーネントを分割
  // useLazyQueryのクエリとコールバックを修正
  const [getActors, { loading, error, data }] = useLazyQuery(GET_FILM_ACTOS, {
    // variables: { userId: 1 },
    operattionName:"getFilmActorInfo"
    // fetchPolicy: "no-cache", // キャッシュを無効化
    onCompleted: (fetchedData) => {
      console.log("Actors fetched:", fetchedData);
    },
    onError: (fetchError) => {
      console.error("Error fetching actors:", fetchError);
    },
  });
  const [filmId, setFilmId] = useState(0)
  const handleValue = ((e:any) => {
    setValue(e.target.value);
  })
  // useEffectを使ってコンポーネントマウント時に一度だけデータを取得する例 (ボタンクリックでも良い)
  // useEffect(() => {
  //   getActors();
  // }, [getActors]);

  if (loading) return <p>Loading actors...</p>;
  if (error) return <p>Error fetching actors: {error.message}</p>;

  return (
    <div>
      <h1>Apollo Client - Actors</h1>
      <input
      type="number"
        value={filmId}
        onChange={(e) => handleValue(e)}
      ></input>
      <button onClick={() => getActors(filmId)}>Fetch Actors</button>{" "}
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
