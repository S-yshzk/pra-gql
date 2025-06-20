import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Film } from "../models/Film";
import { LanguageCount } from "../resolvers/outputs/LanguageCount";

@TypeGraphQL.ObjectType("Language", {})
export class Language {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  language_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

  film_film_language_idTolanguage?: Film[];

  film_film_original_language_idTolanguage?: Film[];

  @TypeGraphQL.Field(_type => LanguageCount, {
    nullable: true
  })
  _count?: LanguageCount | null;
}
