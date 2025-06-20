import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateWithoutInventoryInput } from "../inputs/StoreCreateWithoutInventoryInput";
import { StoreWhereUniqueInput } from "../inputs/StoreWhereUniqueInput";

@TypeGraphQL.InputType("StoreCreateOrConnectWithoutInventoryInput", {})
export class StoreCreateOrConnectWithoutInventoryInput {
  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: false
  })
  where!: StoreWhereUniqueInput;

  @TypeGraphQL.Field(_type => StoreCreateWithoutInventoryInput, {
    nullable: false
  })
  create!: StoreCreateWithoutInventoryInput;
}
