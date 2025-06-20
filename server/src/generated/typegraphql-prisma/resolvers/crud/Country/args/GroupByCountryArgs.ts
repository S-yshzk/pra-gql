import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountryOrderByWithAggregationInput } from "../../../inputs/CountryOrderByWithAggregationInput";
import { CountryScalarWhereWithAggregatesInput } from "../../../inputs/CountryScalarWhereWithAggregatesInput";
import { CountryWhereInput } from "../../../inputs/CountryWhereInput";
import { CountryScalarFieldEnum } from "../../../../enums/CountryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCountryArgs {
  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CountryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CountryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CountryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"country_id" | "country" | "last_update">;

  @TypeGraphQL.Field(_type => CountryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CountryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
