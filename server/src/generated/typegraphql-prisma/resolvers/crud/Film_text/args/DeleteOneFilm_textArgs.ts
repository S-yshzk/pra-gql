import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_textWhereUniqueInput } from "../../../inputs/Film_textWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneFilm_textArgs {
  @TypeGraphQL.Field(_type => Film_textWhereUniqueInput, {
    nullable: false
  })
  where!: Film_textWhereUniqueInput;
}
