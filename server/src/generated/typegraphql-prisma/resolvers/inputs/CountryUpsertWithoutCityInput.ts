import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutCityInput } from "../inputs/CountryCreateWithoutCityInput";
import { CountryUpdateWithoutCityInput } from "../inputs/CountryUpdateWithoutCityInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpsertWithoutCityInput", {})
export class CountryUpsertWithoutCityInput {
  @TypeGraphQL.Field(_type => CountryUpdateWithoutCityInput, {
    nullable: false
  })
  update!: CountryUpdateWithoutCityInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutCityInput, {
    nullable: false
  })
  create!: CountryCreateWithoutCityInput;

  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;
}
