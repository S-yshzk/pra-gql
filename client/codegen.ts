import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // バックエンドが生成したスキーマファイルの場所を指定
  schema: "http://localhost:4000/graphql", // もしくは 'schema.graphql'

  // フロントエンドのクエリが書かれているファイルの場所を指定
  documents: ["src/**/*.ts?(x)"],

  generates: {
    // 生成されるファイルの出力先
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
