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

@TypeGraphQL.InputType("StaffOrderByWithRelationInput", {})
export class StaffOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  staff_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  picture?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  email?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  store_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  password?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PaymentOrderByRelationAggregateInput, {
    nullable: true
  })
  payment?: PaymentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RentalOrderByRelationAggregateInput, {
    nullable: true
  })
  rental?: RentalOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AddressOrderByWithRelationInput, {
    nullable: true
  })
  address?: AddressOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => StoreOrderByWithRelationInput, {
    nullable: true
  })
  store_staff_store_idTostore?: StoreOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => StoreOrderByWithRelationInput, {
    nullable: true
  })
  store_store_manager_staff_idTostaff?: StoreOrderByWithRelationInput | undefined;
}
