import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerRelationFilter } from "../inputs/CustomerRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { InventoryRelationFilter } from "../inputs/InventoryRelationFilter";
import { PaymentListRelationFilter } from "../inputs/PaymentListRelationFilter";
import { RentalWhereInput } from "../inputs/RentalWhereInput";
import { StaffRelationFilter } from "../inputs/StaffRelationFilter";
import { rentalRental_dateInventory_idCustomer_idCompoundUniqueInput } from "../inputs/rentalRental_dateInventory_idCustomer_idCompoundUniqueInput";

@TypeGraphQL.InputType("RentalWhereUniqueInput", {})
export class RentalWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rental_id?: number | undefined;

  @TypeGraphQL.Field(_type => rentalRental_dateInventory_idCustomer_idCompoundUniqueInput, {
    nullable: true
  })
  rental_date_inventory_id_customer_id?: rentalRental_dateInventory_idCustomer_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [RentalWhereInput], {
    nullable: true
  })
  AND?: RentalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalWhereInput], {
    nullable: true
  })
  OR?: RentalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalWhereInput], {
    nullable: true
  })
  NOT?: RentalWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  rental_date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  inventory_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  customer_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  return_date?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  staff_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => PaymentListRelationFilter, {
    nullable: true
  })
  payment?: PaymentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerRelationFilter, {
    nullable: true
  })
  customer?: CustomerRelationFilter | undefined;

  @TypeGraphQL.Field(_type => InventoryRelationFilter, {
    nullable: true
  })
  inventory?: InventoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StaffRelationFilter, {
    nullable: true
  })
  staff?: StaffRelationFilter | undefined;
}
