import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_categoryCreateInput } from "../../../inputs/Film_categoryCreateInput";
import { Film_categoryUpdateInput } from "../../../inputs/Film_categoryUpdateInput";
import { Film_categoryWhereUniqueInput } from "../../../inputs/Film_categoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneFilm_categoryArgs {
  @TypeGraphQL.Field(_type => Film_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Film_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Film_categoryCreateInput, {
    nullable: false
  })
  create!: Film_categoryCreateInput;

  @TypeGraphQL.Field(_type => Film_categoryUpdateInput, {
    nullable: false
  })
  update!: Film_categoryUpdateInput;
}
