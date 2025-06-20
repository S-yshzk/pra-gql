import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryCreateManyFilmInputEnvelope } from "../inputs/InventoryCreateManyFilmInputEnvelope";
import { InventoryCreateOrConnectWithoutFilmInput } from "../inputs/InventoryCreateOrConnectWithoutFilmInput";
import { InventoryCreateWithoutFilmInput } from "../inputs/InventoryCreateWithoutFilmInput";
import { InventoryScalarWhereInput } from "../inputs/InventoryScalarWhereInput";
import { InventoryUpdateManyWithWhereWithoutFilmInput } from "../inputs/InventoryUpdateManyWithWhereWithoutFilmInput";
import { InventoryUpdateWithWhereUniqueWithoutFilmInput } from "../inputs/InventoryUpdateWithWhereUniqueWithoutFilmInput";
import { InventoryUpsertWithWhereUniqueWithoutFilmInput } from "../inputs/InventoryUpsertWithWhereUniqueWithoutFilmInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";

@TypeGraphQL.InputType("InventoryUpdateManyWithoutFilmNestedInput", {})
export class InventoryUpdateManyWithoutFilmNestedInput {
  @TypeGraphQL.Field(_type => [InventoryCreateWithoutFilmInput], {
    nullable: true
  })
  create?: InventoryCreateWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryCreateOrConnectWithoutFilmInput], {
    nullable: true
  })
  connectOrCreate?: InventoryCreateOrConnectWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryUpsertWithWhereUniqueWithoutFilmInput], {
    nullable: true
  })
  upsert?: InventoryUpsertWithWhereUniqueWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => InventoryCreateManyFilmInputEnvelope, {
    nullable: true
  })
  createMany?: InventoryCreateManyFilmInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [InventoryUpdateWithWhereUniqueWithoutFilmInput], {
    nullable: true
  })
  update?: InventoryUpdateWithWhereUniqueWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryUpdateManyWithWhereWithoutFilmInput], {
    nullable: true
  })
  updateMany?: InventoryUpdateManyWithWhereWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: InventoryScalarWhereInput[] | undefined;
}
