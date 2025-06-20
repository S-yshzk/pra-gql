import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FilmOrderByWithAggregationInput } from "../../../inputs/FilmOrderByWithAggregationInput";
import { FilmScalarWhereWithAggregatesInput } from "../../../inputs/FilmScalarWhereWithAggregatesInput";
import { FilmWhereInput } from "../../../inputs/FilmWhereInput";
import { FilmScalarFieldEnum } from "../../../../enums/FilmScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFilmArgs {
  @TypeGraphQL.Field(_type => FilmWhereInput, {
    nullable: true
  })
  where?: FilmWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FilmOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FilmOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FilmScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"film_id" | "title" | "description" | "release_year" | "language_id" | "original_language_id" | "rental_duration" | "rental_rate" | "length" | "replacement_cost" | "rating" | "special_features" | "last_update">;

  @TypeGraphQL.Field(_type => FilmScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FilmScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
