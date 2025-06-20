import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FilmCreateManyInput } from "../../../inputs/FilmCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFilmArgs {
  @TypeGraphQL.Field(_type => [FilmCreateManyInput], {
    nullable: false
  })
  data!: FilmCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
