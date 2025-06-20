import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_textCreateInput } from "../../../inputs/Film_textCreateInput";
import { Film_textUpdateInput } from "../../../inputs/Film_textUpdateInput";
import { Film_textWhereUniqueInput } from "../../../inputs/Film_textWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneFilm_textArgs {
  @TypeGraphQL.Field(_type => Film_textWhereUniqueInput, {
    nullable: false
  })
  where!: Film_textWhereUniqueInput;

  @TypeGraphQL.Field(_type => Film_textCreateInput, {
    nullable: false
  })
  create!: Film_textCreateInput;

  @TypeGraphQL.Field(_type => Film_textUpdateInput, {
    nullable: false
  })
  update!: Film_textUpdateInput;
}
