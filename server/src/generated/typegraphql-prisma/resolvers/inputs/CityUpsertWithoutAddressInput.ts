import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateWithoutAddressInput } from "../inputs/CityCreateWithoutAddressInput";
import { CityUpdateWithoutAddressInput } from "../inputs/CityUpdateWithoutAddressInput";
import { CityWhereInput } from "../inputs/CityWhereInput";

@TypeGraphQL.InputType("CityUpsertWithoutAddressInput", {})
export class CityUpsertWithoutAddressInput {
  @TypeGraphQL.Field(_type => CityUpdateWithoutAddressInput, {
    nullable: false
  })
  update!: CityUpdateWithoutAddressInput;

  @TypeGraphQL.Field(_type => CityCreateWithoutAddressInput, {
    nullable: false
  })
  create!: CityCreateWithoutAddressInput;

  @TypeGraphQL.Field(_type => CityWhereInput, {
    nullable: true
  })
  where?: CityWhereInput | undefined;
}
