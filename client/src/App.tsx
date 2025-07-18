import { useState } from "react";
import "./App.css";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_ACTOR } from "./graphql/query"; // CREATE_ACTOR は修正済みのものを想定
import { CREATE_ACTOR } from "./graphql/mutations";
// GraphQLクエリをサーバーのスキーマに合わせて修正
// const GET_ACTORS = gql`
//   query {
//     films(where: { film_id: { equals: 1 } }) {
//       # <--- このように修正する
//       description
//       film_id
//       title
//       film_actors {
//         film_id
//         actor_id
//         actor {
//           actor_id
//           first_name
//           last_name
//         }
//
//     }
//   }
// `;

function App() {
  // ApolloProvider内部でフックを使うためコンポーネントを分割
  // useLazyQueryのクエリとコールバックを修正
  // Queryのローディング状態
  const [getActors, { loading: getLoading, error: getError, data: getData }] =
    useLazyQuery(GET_ACTOR);

  // Mutationのローディング状態
  const [
    createActor,
    { loading: createLoading, error: createError, data: createData },
  ] = useMutation(CREATE_ACTOR);
  const [actorId, setActorId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // ページの再読み込みを防ぐ
    if (!firstName || !lastName) {
      alert("Please enter both first and last name.");
      return;
    }
    try {
      await createActor({
        variables: {
          // dataプロパティの中に、入力された値をオブジェクトとしてまとめる
          data: {
            first_name: firstName,
            last_name: lastName,
          },
        },
      });
      // 成功したら入力欄をクリア
      setFirstName("");
      setLastName("");
    } catch (err) {
      console.error("Mutation error:", err);
    }
  };
  // useEffectを使ってコンポーネントマウント時に一度だけデータを取得する例 (ボタンクリックでも良い)
  // useEffect(() => {
  //   getActors();
  // }, [getActors]);
  const handleActorId = (v) => {
    setActorId(v);
  };
  if (getLoading) return <p>Loading actors...</p>;
  if (getError) return <p>getError fetching actors: {getError.message}</p>;

  return (
    <div>
      <h1>Apollo Client - Actors</h1>
      <input
        type="number"
        value={actorId}
        onChange={(e) => handleActorId(Number(e.target.value))}
      ></input>
      <button onClick={() => getActors({ variables: { actorId } })}>
        Fetch Actors
      </button>{" "}
      {/* ボタンにテキストを追加 */}
      {/* 取得したデータを表示 */}
      {getData && getData.actors && (
        <ul>
          {getData.actors.map(
            (
              actor: actor // actorの型を適切に定義するのが理想
            ) => (
              <li key={actor.actor_id}>
                {actor.first_name} {actor.last_name} (ID: {actor.actor_id})
              </li>
            )
          )}
        </ul>
      )}
      {getData?.actor && (
        <li>
          {getData.actor.first_name} {getData.actor.last_name} (ID:{" "}
          {getData.actor.actor_id})
        </li>
      )}
      {!getData && !getLoading && <p>Click the button to fetch actors.</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {/* ローディング状態を正しく反映 */}
        <button type="submit" disabled={createLoading}>
          {createLoading ? "Creating..." : "Create Actor"}
        </button>
        {/* エラーと成功メッセージを正しく表示 */}
        {createError && <p>Error creating actor: {createError.message}</p>}
        {createData && (
          <p>
            Created: {createData.createOneActor.first_name} (ID:{" "}
            {createData.createOneActor.actor_id})
          </p>
        )}
      </form>
    </div>
  );
}

export default App;
