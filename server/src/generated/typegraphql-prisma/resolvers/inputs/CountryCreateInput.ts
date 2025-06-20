import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateNestedManyWithoutCountryInput } from "../inputs/CityCreateNestedManyWithoutCountryInput";

@TypeGraphQL.InputType("CountryCreateInput", {})
export class CountryCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  country!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update?: Date | undefined;

  @TypeGraphQL.Field(_type => CityCreateNestedManyWithoutCountryInput, {
    nullable: true
  })
  city?: CityCreateNestedManyWithoutCountryInput | undefined;
}
