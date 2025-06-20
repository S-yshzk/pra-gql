import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressOrderByRelationAggregateInput } from "../inputs/AddressOrderByRelationAggregateInput";
import { CountryOrderByWithRelationInput } from "../inputs/CountryOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CityOrderByWithRelationInput", {})
export class CityOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  city_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  city?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AddressOrderByRelationAggregateInput, {
    nullable: true
  })
  address?: AddressOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CountryOrderByWithRelationInput, {
    nullable: true
  })
  country?: CountryOrderByWithRelationInput | undefined;
}
