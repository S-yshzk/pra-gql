import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_textCreateManyInput } from "../../../inputs/Film_textCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFilm_textArgs {
  @TypeGraphQL.Field(_type => [Film_textCreateManyInput], {
    nullable: false
  })
  data!: Film_textCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
