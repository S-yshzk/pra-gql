import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityUpdateWithoutAddressInput } from "../inputs/CityUpdateWithoutAddressInput";
import { CityWhereInput } from "../inputs/CityWhereInput";

@TypeGraphQL.InputType("CityUpdateToOneWithWhereWithoutAddressInput", {})
export class CityUpdateToOneWithWhereWithoutAddressInput {
  @TypeGraphQL.Field(_type => CityWhereInput, {
    nullable: true
  })
  where?: CityWhereInput | undefined;

  @TypeGraphQL.Field(_type => CityUpdateWithoutAddressInput, {
    nullable: false
  })
  data!: CityUpdateWithoutAddressInput;
}
