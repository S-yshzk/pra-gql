import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressRelationFilter } from "../inputs/AddressRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PaymentListRelationFilter } from "../inputs/PaymentListRelationFilter";
import { RentalListRelationFilter } from "../inputs/RentalListRelationFilter";
import { StaffWhereInput } from "../inputs/StaffWhereInput";
import { StoreNullableRelationFilter } from "../inputs/StoreNullableRelationFilter";
import { StoreRelationFilter } from "../inputs/StoreRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("StaffWhereUniqueInput", {})
export class StaffWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  staff_id?: number | undefined;

  @TypeGraphQL.Field(_type => [StaffWhereInput], {
    nullable: true
  })
  AND?: StaffWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffWhereInput], {
    nullable: true
  })
  OR?: StaffWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffWhereInput], {
    nullable: true
  })
  NOT?: StaffWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  first_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  last_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  address_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  picture?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  email?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  store_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  password?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => PaymentListRelationFilter, {
    nullable: true
  })
  payment?: PaymentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RentalListRelationFilter, {
    nullable: true
  })
  rental?: RentalListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AddressRelationFilter, {
    nullable: true
  })
  address?: AddressRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StoreRelationFilter, {
    nullable: true
  })
  store_staff_store_idTostore?: StoreRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StoreNullableRelationFilter, {
    nullable: true
  })
  store_store_manager_staff_idTostaff?: StoreNullableRelationFilter | undefined;
}
