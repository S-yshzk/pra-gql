import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_textUpdateInput } from "../../../inputs/Film_textUpdateInput";
import { Film_textWhereUniqueInput } from "../../../inputs/Film_textWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneFilm_textArgs {
  @TypeGraphQL.Field(_type => Film_textUpdateInput, {
    nullable: false
  })
  data!: Film_textUpdateInput;

  @TypeGraphQL.Field(_type => Film_textWhereUniqueInput, {
    nullable: false
  })
  where!: Film_textWhereUniqueInput;
}
