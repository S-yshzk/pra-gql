import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreUpdateWithoutAddressInput } from "../inputs/StoreUpdateWithoutAddressInput";
import { StoreWhereUniqueInput } from "../inputs/StoreWhereUniqueInput";

@TypeGraphQL.InputType("StoreUpdateWithWhereUniqueWithoutAddressInput", {})
export class StoreUpdateWithWhereUniqueWithoutAddressInput {
  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: false
  })
  where!: StoreWhereUniqueInput;

  @TypeGraphQL.Field(_type => StoreUpdateWithoutAddressInput, {
    nullable: false
  })
  data!: StoreUpdateWithoutAddressInput;
}
