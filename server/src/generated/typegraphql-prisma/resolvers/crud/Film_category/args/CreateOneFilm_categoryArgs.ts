import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_categoryCreateInput } from "../../../inputs/Film_categoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneFilm_categoryArgs {
  @TypeGraphQL.Field(_type => Film_categoryCreateInput, {
    nullable: false
  })
  data!: Film_categoryCreateInput;
}
