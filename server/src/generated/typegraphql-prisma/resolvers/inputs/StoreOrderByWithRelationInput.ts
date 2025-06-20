import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressOrderByWithRelationInput } from "../inputs/AddressOrderByWithRelationInput";
import { CustomerOrderByRelationAggregateInput } from "../inputs/CustomerOrderByRelationAggregateInput";
import { InventoryOrderByRelationAggregateInput } from "../inputs/InventoryOrderByRelationAggregateInput";
import { StaffOrderByRelationAggregateInput } from "../inputs/StaffOrderByRelationAggregateInput";
import { StaffOrderByWithRelationInput } from "../inputs/StaffOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StoreOrderByWithRelationInput", {})
export class StoreOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  store_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  manager_staff_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CustomerOrderByRelationAggregateInput, {
    nullable: true
  })
  customer?: CustomerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InventoryOrderByRelationAggregateInput, {
    nullable: true
  })
  inventory?: InventoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StaffOrderByRelationAggregateInput, {
    nullable: true
  })
  staff_staff_store_idTostore?: StaffOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AddressOrderByWithRelationInput, {
    nullable: true
  })
  address?: AddressOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => StaffOrderByWithRelationInput, {
    nullable: true
  })
  staff_store_manager_staff_idTostaff?: StaffOrderByWithRelationInput | undefined;
}
