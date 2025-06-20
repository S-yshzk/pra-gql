import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryCreateManyStoreInputEnvelope } from "../inputs/InventoryCreateManyStoreInputEnvelope";
import { InventoryCreateOrConnectWithoutStoreInput } from "../inputs/InventoryCreateOrConnectWithoutStoreInput";
import { InventoryCreateWithoutStoreInput } from "../inputs/InventoryCreateWithoutStoreInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";

@TypeGraphQL.InputType("InventoryCreateNestedManyWithoutStoreInput", {})
export class InventoryCreateNestedManyWithoutStoreInput {
  @TypeGraphQL.Field(_type => [InventoryCreateWithoutStoreInput], {
    nullable: true
  })
  create?: InventoryCreateWithoutStoreInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryCreateOrConnectWithoutStoreInput], {
    nullable: true
  })
  connectOrCreate?: InventoryCreateOrConnectWithoutStoreInput[] | undefined;

  @TypeGraphQL.Field(_type => InventoryCreateManyStoreInputEnvelope, {
    nullable: true
  })
  createMany?: InventoryCreateManyStoreInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [InventoryWhereUniqueInput], {
    nullable: true
  })
  connect?: InventoryWhereUniqueInput[] | undefined;
}
