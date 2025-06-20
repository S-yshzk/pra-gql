import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressListRelationFilter } from "../inputs/AddressListRelationFilter";
import { CityWhereInput } from "../inputs/CityWhereInput";
import { CountryRelationFilter } from "../inputs/CountryRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CityWhereUniqueInput", {})
export class CityWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  city_id?: number | undefined;

  @TypeGraphQL.Field(_type => [CityWhereInput], {
    nullable: true
  })
  AND?: CityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityWhereInput], {
    nullable: true
  })
  OR?: CityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityWhereInput], {
    nullable: true
  })
  NOT?: CityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  city?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  country_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => AddressListRelationFilter, {
    nullable: true
  })
  address?: AddressListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CountryRelationFilter, {
    nullable: true
  })
  country?: CountryRelationFilter | undefined;
}
