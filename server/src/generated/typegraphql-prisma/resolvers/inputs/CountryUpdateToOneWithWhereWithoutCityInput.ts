import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryUpdateWithoutCityInput } from "../inputs/CountryUpdateWithoutCityInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpdateToOneWithWhereWithoutCityInput", {})
export class CountryUpdateToOneWithWhereWithoutCityInput {
  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateWithoutCityInput, {
    nullable: false
  })
  data!: CountryUpdateWithoutCityInput;
}
