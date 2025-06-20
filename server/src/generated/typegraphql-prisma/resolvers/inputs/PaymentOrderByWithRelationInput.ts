import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerOrderByWithRelationInput } from "../inputs/CustomerOrderByWithRelationInput";
import { RentalOrderByWithRelationInput } from "../inputs/RentalOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { StaffOrderByWithRelationInput } from "../inputs/StaffOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PaymentOrderByWithRelationInput", {})
export class PaymentOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  staff_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  rental_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  amount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  last_update?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => CustomerOrderByWithRelationInput, {
    nullable: true
  })
  customer?: CustomerOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => RentalOrderByWithRelationInput, {
    nullable: true
  })
  rental?: RentalOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => StaffOrderByWithRelationInput, {
    nullable: true
  })
  staff?: StaffOrderByWithRelationInput | undefined;
}
