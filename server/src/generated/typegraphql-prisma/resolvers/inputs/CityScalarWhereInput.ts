import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CityScalarWhereInput", {})
export class CityScalarWhereInput {
  @TypeGraphQL.Field(_type => [CityScalarWhereInput], {
    nullable: true
  })
  AND?: CityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityScalarWhereInput], {
    nullable: true
  })
  OR?: CityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityScalarWhereInput], {
    nullable: true
  })
  NOT?: CityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  city_id?: IntFilter | undefined;

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
}
