import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityOrderByWithRelationInput } from "../inputs/CityOrderByWithRelationInput";
import { CustomerOrderByRelationAggregateInput } from "../inputs/CustomerOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { StaffOrderByRelationAggregateInput } from "../inputs/StaffOrderByRelationAggregateInput";
import { StoreOrderByRelationAggregateInput } from "../inputs/StoreOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AddressOrderByWithRelationInput", {})
export class AddressOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  address2?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  district?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  city_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  postal_code?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  phone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CityOrderByWithRelationInput, {
    nullable: true
  })
  city?: CityOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => CustomerOrderByRelationAggregateInput, {
    nullable: true
  })
  customer?: CustomerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffOrderByRelationAggregateInput, {
    nullable: true
  })
  staff?: StaffOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StoreOrderByRelationAggregateInput, {
    nullable: true
  })
  store?: StoreOrderByRelationAggregateInput | undefined;
}
