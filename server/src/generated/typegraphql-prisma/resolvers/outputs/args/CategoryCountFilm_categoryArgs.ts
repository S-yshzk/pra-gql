import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_categoryWhereInput } from "../../inputs/Film_categoryWhereInput";

@TypeGraphQL.ArgsType()
export class CategoryCountFilm_categoryArgs {
  @TypeGraphQL.Field(_type => Film_categoryWhereInput, {
    nullable: true
  })
  where?: Film_categoryWhereInput | undefined;
}
