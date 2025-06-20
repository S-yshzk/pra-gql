import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_categoryUpdateInput } from "../../../inputs/Film_categoryUpdateInput";
import { Film_categoryWhereUniqueInput } from "../../../inputs/Film_categoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneFilm_categoryArgs {
  @TypeGraphQL.Field(_type => Film_categoryUpdateInput, {
    nullable: false
  })
  data!: Film_categoryUpdateInput;

  @TypeGraphQL.Field(_type => Film_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Film_categoryWhereUniqueInput;
}
