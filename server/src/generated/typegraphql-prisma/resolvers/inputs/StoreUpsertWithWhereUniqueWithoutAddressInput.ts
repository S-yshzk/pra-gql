import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateWithoutAddressInput } from "../inputs/StoreCreateWithoutAddressInput";
import { StoreUpdateWithoutAddressInput } from "../inputs/StoreUpdateWithoutAddressInput";
import { StoreWhereUniqueInput } from "../inputs/StoreWhereUniqueInput";

@TypeGraphQL.InputType("StoreUpsertWithWhereUniqueWithoutAddressInput", {})
export class StoreUpsertWithWhereUniqueWithoutAddressInput {
  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: false
  })
  where!: StoreWhereUniqueInput;

  @TypeGraphQL.Field(_type => StoreUpdateWithoutAddressInput, {
    nullable: false
  })
  update!: StoreUpdateWithoutAddressInput;

  @TypeGraphQL.Field(_type => StoreCreateWithoutAddressInput, {
    nullable: false
  })
  create!: StoreCreateWithoutAddressInput;
}
