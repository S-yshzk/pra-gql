import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerOrderByWithRelationInput } from "../inputs/CustomerOrderByWithRelationInput";
import { InventoryOrderByWithRelationInput } from "../inputs/InventoryOrderByWithRelationInput";
import { PaymentOrderByRelationAggregateInput } from "../inputs/PaymentOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { StaffOrderByWithRelationInput } from "../inputs/StaffOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RentalOrderByWithRelationInput", {})
export class RentalOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rental_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rental_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  inventory_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  return_date?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  staff_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_update?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PaymentOrderByRelationAggregateInput, {
    nullable: true
  })
  payment?: PaymentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomerOrderByWithRelationInput, {
    nullable: true
  })
  customer?: CustomerOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => InventoryOrderByWithRelationInput, {
    nullable: true
  })
  inventory?: InventoryOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => StaffOrderByWithRelationInput, {
    nullable: true
  })
  staff?: StaffOrderByWithRelationInput | undefined;
}
