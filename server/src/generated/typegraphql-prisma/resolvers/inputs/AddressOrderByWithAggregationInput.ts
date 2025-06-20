import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressAvgOrderByAggregateInput } from "../inputs/AddressAvgOrderByAggregateInput";
import { AddressCountOrderByAggregateInput } from "../inputs/AddressCountOrderByAggregateInput";
import { AddressMaxOrderByAggregateInput } from "../inputs/AddressMaxOrderByAggregateInput";
import { AddressMinOrderByAggregateInput } from "../inputs/AddressMinOrderByAggregateInput";
import { AddressSumOrderByAggregateInput } from "../inputs/AddressSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AddressOrderByWithAggregationInput", {})
export class AddressOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => AddressCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AddressCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AddressAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AddressAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AddressMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AddressMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AddressMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AddressMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AddressSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AddressSumOrderByAggregateInput | undefined;
}
