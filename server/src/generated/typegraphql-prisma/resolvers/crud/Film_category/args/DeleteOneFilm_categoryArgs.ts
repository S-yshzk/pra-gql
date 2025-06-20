import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_categoryWhereUniqueInput } from "../../../inputs/Film_categoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneFilm_categoryArgs {
  @TypeGraphQL.Field(_type => Film_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Film_categoryWhereUniqueInput;
}
