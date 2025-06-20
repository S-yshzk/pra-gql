import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityListRelationFilter } from "../inputs/CityListRelationFilter";
import { CountryWhereInput } from "../inputs/CountryWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CountryWhereUniqueInput", {})
export class CountryWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  country_id?: number | undefined;

  @TypeGraphQL.Field(_type => [CountryWhereInput], {
    nullable: true
  })
  AND?: CountryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CountryWhereInput], {
    nullable: true
  })
  OR?: CountryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CountryWhereInput], {
    nullable: true
  })
  NOT?: CountryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  country?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => CityListRelationFilter, {
    nullable: true
  })
  city?: CityListRelationFilter | undefined;
}
