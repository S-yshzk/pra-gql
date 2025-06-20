import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_textOrderByWithAggregationInput } from "../../../inputs/Film_textOrderByWithAggregationInput";
import { Film_textScalarWhereWithAggregatesInput } from "../../../inputs/Film_textScalarWhereWithAggregatesInput";
import { Film_textWhereInput } from "../../../inputs/Film_textWhereInput";
import { Film_textScalarFieldEnum } from "../../../../enums/Film_textScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFilm_textArgs {
  @TypeGraphQL.Field(_type => Film_textWhereInput, {
    nullable: true
  })
  where?: Film_textWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Film_textOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Film_textOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_textScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"film_id" | "title" | "description">;

  @TypeGraphQL.Field(_type => Film_textScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Film_textScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
