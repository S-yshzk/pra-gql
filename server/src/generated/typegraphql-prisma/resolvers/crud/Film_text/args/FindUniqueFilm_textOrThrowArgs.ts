import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_textWhereUniqueInput } from "../../../inputs/Film_textWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFilm_textOrThrowArgs {
  @TypeGraphQL.Field(_type => Film_textWhereUniqueInput, {
    nullable: false
  })
  where!: Film_textWhereUniqueInput;
}
