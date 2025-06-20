import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryCreateManyStoreInputEnvelope } from "../inputs/InventoryCreateManyStoreInputEnvelope";
import { InventoryCreateOrConnectWithoutStoreInput } from "../inputs/InventoryCreateOrConnectWithoutStoreInput";
import { InventoryCreateWithoutStoreInput } from "../inputs/InventoryCreateWithoutStoreInput";
import { InventoryScalarWhereInput } from "../inputs/InventoryScalarWhereInput";
import { InventoryUpdateManyWithWhereWithoutStoreInput } from "../inputs/InventoryUpdateManyWithWhereWithoutStoreInput";
import { InventoryUpdateWithWhereUniqueWithoutStoreInput } from "../inputs/InventoryUpdateWithWhereUniqueWithoutStoreInput";
import { InventoryUpsertWithWhereUniqueWithoutStoreInput } from "../inputs/InventoryUpsertWithWhereUniqueWithoutStoreInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";

@TypeGraphQL.InputType("InventoryUpdateManyWithoutStoreNestedInput", {})
export class InventoryUpdateManyWithoutStoreNestedInput {
  @TypeGraphQL.Field(_type => [InventoryCreateWithoutStoreInput], {
    nullable: true
  })
  create?: InventoryCreateWithoutStoreInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryCreateOrConnectWithoutStoreInput], {
    nullable: true
  })
  connectOrCreate?: InventoryCreateOrConnectWithoutStoreInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryUpsertWithWhereUniqueWithoutStoreInput], {
    nullable: true
  })
  upsert?: InventoryUpsertWithWhereUniqueWithoutStoreInput[] | undefined;

  @TypeGraphQL.Field(_type => InventoryCreateManyStoreInputEnvelope, {
    nullable: true
  })
  createMany?: InventoryCreateManyStoreInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [InventoryWhereUniqueInput], {
    nullable: true
  })
  set?: InventoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: InventoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryWhereUniqueInput], {
    nullable: true
  })
  delete?: InventoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryWhereUniqueInput], {
    nullable: true
  })
  connect?: InventoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryUpdateWithWhereUniqueWithoutStoreInput], {
    nullable: true
  })
  update?: InventoryUpdateWithWhereUniqueWithoutStoreInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryUpdateManyWithWhereWithoutStoreInput], {
    nullable: true
  })
  updateMany?: InventoryUpdateManyWithWhereWithoutStoreInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: InventoryScalarWhereInput[] | undefined;
}
