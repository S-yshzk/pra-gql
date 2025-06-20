import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateOrConnectWithoutInventoryInput } from "../inputs/StoreCreateOrConnectWithoutInventoryInput";
import { StoreCreateWithoutInventoryInput } from "../inputs/StoreCreateWithoutInventoryInput";
import { StoreWhereUniqueInput } from "../inputs/StoreWhereUniqueInput";

@TypeGraphQL.InputType("StoreCreateNestedOneWithoutInventoryInput", {})
export class StoreCreateNestedOneWithoutInventoryInput {
  @TypeGraphQL.Field(_type => StoreCreateWithoutInventoryInput, {
    nullable: true
  })
  create?: StoreCreateWithoutInventoryInput | undefined;

  @TypeGraphQL.Field(_type => StoreCreateOrConnectWithoutInventoryInput, {
    nullable: true
  })
  connectOrCreate?: StoreCreateOrConnectWithoutInventoryInput | undefined;

  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: true
  })
  connect?: StoreWhereUniqueInput | undefined;
}
