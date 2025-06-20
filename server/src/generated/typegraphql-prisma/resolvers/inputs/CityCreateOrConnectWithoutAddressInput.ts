import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateWithoutAddressInput } from "../inputs/CityCreateWithoutAddressInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityCreateOrConnectWithoutAddressInput", {})
export class CityCreateOrConnectWithoutAddressInput {
  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: false
  })
  where!: CityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CityCreateWithoutAddressInput, {
    nullable: false
  })
  create!: CityCreateWithoutAddressInput;
}
