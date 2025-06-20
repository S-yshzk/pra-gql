import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressOrderByWithRelationInput } from "../inputs/AddressOrderByWithRelationInput";
import { PaymentOrderByRelationAggregateInput } from "../inputs/PaymentOrderByRelationAggregateInput";
import { RentalOrderByRelationAggregateInput } from "../inputs/RentalOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { StoreOrderByWithRelationInput } from "../inputs/StoreOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustomerOrderByWithRelationInput", {})
export class CustomerOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  store_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  email?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  create_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  last_update?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => AddressOrderByWithRelationInput, {
    nullable: true
  })
  address?: AddressOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => StoreOrderByWithRelationInput, {
    nullable: true
  })
  store?: StoreOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PaymentOrderByRelationAggregateInput, {
    nullable: true
  })
  payment?: PaymentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RentalOrderByRelationAggregateInput, {
    nullable: true
  })
  rental?: RentalOrderByRelationAggregateInput | undefined;
}
