import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutCityInput } from "../inputs/CountryCreateOrConnectWithoutCityInput";
import { CountryCreateWithoutCityInput } from "../inputs/CountryCreateWithoutCityInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateNestedOneWithoutCityInput", {})
export class CountryCreateNestedOneWithoutCityInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutCityInput, {
    nullable: true
  })
  create?: CountryCreateWithoutCityInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutCityInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutCityInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;
}
