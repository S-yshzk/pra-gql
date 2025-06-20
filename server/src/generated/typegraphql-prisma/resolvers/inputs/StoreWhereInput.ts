import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressRelationFilter } from "../inputs/AddressRelationFilter";
import { CustomerListRelationFilter } from "../inputs/CustomerListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { InventoryListRelationFilter } from "../inputs/InventoryListRelationFilter";
import { StaffListRelationFilter } from "../inputs/StaffListRelationFilter";
import { StaffRelationFilter } from "../inputs/StaffRelationFilter";

@TypeGraphQL.InputType("StoreWhereInput", {})
export class StoreWhereInput {
  @TypeGraphQL.Field(_type => [StoreWhereInput], {
    nullable: true
  })
  AND?: StoreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoreWhereInput], {
    nullable: true
  })
  OR?: StoreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoreWhereInput], {
    nullable: true
  })
  NOT?: StoreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  store_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  manager_staff_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  address_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerListRelationFilter, {
    nullable: true
  })
  customer?: CustomerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => InventoryListRelationFilter, {
    nullable: true
  })
  inventory?: InventoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StaffListRelationFilter, {
    nullable: true
  })
  staff_staff_store_idTostore?: StaffListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AddressRelationFilter, {
    nullable: true
  })
  address?: AddressRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StaffRelationFilter, {
    nullable: true
  })
  staff_store_manager_staff_idTostaff?: StaffRelationFilter | undefined;
}
