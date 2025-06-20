import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutCityInput } from "../inputs/CountryCreateWithoutCityInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateOrConnectWithoutCityInput", {})
export class CountryCreateOrConnectWithoutCityInput {
  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: false
  })
  where!: CountryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutCityInput, {
    nullable: false
  })
  create!: CountryCreateWithoutCityInput;
}
