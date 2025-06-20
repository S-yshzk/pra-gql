import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityRelationFilter } from "../inputs/CityRelationFilter";
import { CustomerListRelationFilter } from "../inputs/CustomerListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StaffListRelationFilter } from "../inputs/StaffListRelationFilter";
import { StoreListRelationFilter } from "../inputs/StoreListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("AddressWhereInput", {})
export class AddressWhereInput {
  @TypeGraphQL.Field(_type => [AddressWhereInput], {
    nullable: true
  })
  AND?: AddressWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressWhereInput], {
    nullable: true
  })
  OR?: AddressWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AddressWhereInput], {
    nullable: true
  })
  NOT?: AddressWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  address_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  address2?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  district?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  city_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  postal_code?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  phone?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => CityRelationFilter, {
    nullable: true
  })
  city?: CityRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerListRelationFilter, {
    nullable: true
  })
  customer?: CustomerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StaffListRelationFilter, {
    nullable: true
  })
  staff?: StaffListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StoreListRelationFilter, {
    nullable: true
  })
  store?: StoreListRelationFilter | undefined;
}
