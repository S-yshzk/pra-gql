// src/index.ts
import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema, ClassType, NonEmptyArray } from "type-graphql";

import { prisma } from "./prisma"; // Prisma Clientインスタンス
import { createContext } from "./context"; // コンテキスト生成関数

// --- typegraphql-prisma によって生成されたリゾルバをインポート ---
import {
  FindManyActorResolver, // 全てのActorを取得する機能を提供
  // 必要に応じて他のリゾルバもインポート:
  // FindUniqueActorResolver, // 特定のActorを取得
  // ActorCrudResolver,       // ActorのCRUD操作全般
  // ActorRelationsResolver,  // Actorのリレーション解決
  ActorRelationsResolver,
  FilmCrudResolver,
  FindUniqueFilmOrThrowResolver,
  FindUniqueFilmOrThrowArgs,
  Film_actor,
} from "./generated/typegraphql-prisma"; // 生成されたindexファイルから
import gql from "graphql-tag";
import { PrismaClient } from "@prisma/client";

// カスタムリゾルバがあればそれもインポート
// import { MyCustomActorResolver } from './resolvers/MyCustomActorResolver';

const typeDefs = gql`
  input UserFilter {
    gt: Int
    lt: Int
  }
  type User {
    name: String!
    age: Int!
    userId: Int!
    posts: [Post]
  }
  type greed {
    hello: String
  }
  type Post {
    postId: Int!
    userId: Int!
    discription: String!
  }
  type Actor {
    actor_id: Int!
    first_name: String!
    last_name: String!
    film_id: Int
    film_actors: [Film_actor!]!
  }
  type Film_actor {
    actor_id: Int!
    film_id: Int!
    actor: Actor
  }
  type Film {
    # _count: FilmCount
    description: String
    film_id: Int!
    language_id: Int!
    # last_update: DateTimeISO!
    length: Int
    original_language_id: Int
    title: String!
    film_actors: [Film_actor]
  }

  type Query {
    hello: String
    user(userId: Int!): User
    users: [User]
    # posts: [Post]
    film_actors: [Film_actor]
    actors(actor_id: Int!): [Actor]
    films(film_id: Int!): [Film]
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => "world",
    user: (parent: any, args: { userId: number }) => {
      return users.find((u) => u.userId === args.userId);
    },
    // posts: () => posts,
    users: () => users,
    actors: async (parent: any, arg: any, context: any) => {
      const { prisma } = context;
      console.log(arg);
      return prisma.actor.findMany({ where: { actor_id: arg.actor_id } });
    },
    films: (parent: any, arg: any, context: any) => {
      const { prisma } = context;
      if (arg) {
        return prisma.film.findMany({ where: { film_id: arg.film_id } });
      } else {
        return prisma.film.findMany();
      }
    },
  },
  User: {
    posts: (parent: { userId: number }) => {
      return posts.filter((post) => post.userId === parent.userId);
    },
  },
  Actor: {
    film_actors: async (parent: any, arg: any, context: any) => {
      const { prisma } = context;
      console.log(parent);
      return prisma.film_actor.findMany();
    },
  },
  Film: {
    film_actors: async (parent: any, arg: any, context: any) => {
      const { prisma } = context;
      console.log(parent);
      return prisma.film_actor.findMany({ where: { film_id: parent.film_id } });
    },
  },
  Film_actor: {},
};

const users = [
  { name: "Sample User1", age: 20, userId: 1 },
  { name: "Sample User2", age: 30, userId: 2 },
  { name: "Sample User3", age: 40, userId: 3 },
];

const posts = [
  { postId: 3232, userId: 1, discription: "fafafa" },
  { postId: 332, userId: 3, discription: "fjaldja" },
  { postId: 3222, userId: 1, discription: "yohoho" },
  { postId: 38, userId: 4, discription: "jjjj" },
  { postId: 2323, userId: 1, discription: "dkkk" },
];

async function main() {
  // 使用するリゾルバのリスト
  const resolversToUse: NonEmptyArray<Function> = [
    FindManyActorResolver,
    ActorRelationsResolver,
    FindUniqueFilmOrThrowResolver,
    // MyCustomActorResolver, // カスタムリゾルバもここに追加
  ];

  // GraphQLスキーマをビルド
  const schema = await buildSchema({
    resolvers: resolversToUse,
    validate: false,
    emitSchemaFile: "./schema.graphql", // スキーマファイルを出力する場合
  });

  // Apollo Serverのインスタンスを作成
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // サーバーを起動
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req, res }) => createContext(),
  });

  console.log(`🚀 Server ready at ${url}`);
}

main().catch((error) => {
  console.error("Error starting server:", error);
  process.exit(1);
});
