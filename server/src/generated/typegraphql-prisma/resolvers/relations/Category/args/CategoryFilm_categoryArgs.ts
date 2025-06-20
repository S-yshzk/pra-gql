import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_categoryOrderByWithRelationInput } from "../../../inputs/Film_categoryOrderByWithRelationInput";
import { Film_categoryWhereInput } from "../../../inputs/Film_categoryWhereInput";
import { Film_categoryWhereUniqueInput } from "../../../inputs/Film_categoryWhereUniqueInput";
import { Film_categoryScalarFieldEnum } from "../../../../enums/Film_categoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CategoryFilm_categoryArgs {
  @TypeGraphQL.Field(_type => Film_categoryWhereInput, {
    nullable: true
  })
  where?: Film_categoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Film_categoryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Film_categoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: Film_categoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"film_id" | "category_id" | "last_update"> | undefined;
}
