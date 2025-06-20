import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateNestedOneWithoutCityInput } from "../inputs/CountryCreateNestedOneWithoutCityInput";

@TypeGraphQL.InputType("CityCreateWithoutAddressInput", {})
export class CityCreateWithoutAddressInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  city!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => CountryCreateNestedOneWithoutCityInput, {
    nullable: false
  })
  country!: CountryCreateNestedOneWithoutCityInput;
}
