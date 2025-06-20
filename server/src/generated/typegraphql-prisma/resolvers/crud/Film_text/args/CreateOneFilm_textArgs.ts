import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_textCreateInput } from "../../../inputs/Film_textCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneFilm_textArgs {
  @TypeGraphQL.Field(_type => Film_textCreateInput, {
    nullable: false
  })
  data!: Film_textCreateInput;
}
