import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_categoryOrderByWithAggregationInput } from "../../../inputs/Film_categoryOrderByWithAggregationInput";
import { Film_categoryScalarWhereWithAggregatesInput } from "../../../inputs/Film_categoryScalarWhereWithAggregatesInput";
import { Film_categoryWhereInput } from "../../../inputs/Film_categoryWhereInput";
import { Film_categoryScalarFieldEnum } from "../../../../enums/Film_categoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFilm_categoryArgs {
  @TypeGraphQL.Field(_type => Film_categoryWhereInput, {
    nullable: true
  })
  where?: Film_categoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Film_categoryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"film_id" | "category_id" | "last_update">;

  @TypeGraphQL.Field(_type => Film_categoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Film_categoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
