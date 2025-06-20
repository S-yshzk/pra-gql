import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressRelationFilter } from "../inputs/AddressRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PaymentListRelationFilter } from "../inputs/PaymentListRelationFilter";
import { RentalListRelationFilter } from "../inputs/RentalListRelationFilter";
import { StoreRelationFilter } from "../inputs/StoreRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CustomerWhereInput", {})
export class CustomerWhereInput {
  @TypeGraphQL.Field(_type => [CustomerWhereInput], {
    nullable: true
  })
  AND?: CustomerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereInput], {
    nullable: true
  })
  OR?: CustomerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereInput], {
    nullable: true
  })
  NOT?: CustomerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  customer_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  store_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  first_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  last_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  email?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  address_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  create_date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  last_update?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => AddressRelationFilter, {
    nullable: true
  })
  address?: AddressRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StoreRelationFilter, {
    nullable: true
  })
  store?: StoreRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PaymentListRelationFilter, {
    nullable: true
  })
  payment?: PaymentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RentalListRelationFilter, {
    nullable: true
  })
  rental?: RentalListRelationFilter | undefined;
}
