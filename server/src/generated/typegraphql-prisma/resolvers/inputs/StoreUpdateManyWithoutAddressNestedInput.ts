import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateManyAddressInputEnvelope } from "../inputs/StoreCreateManyAddressInputEnvelope";
import { StoreCreateOrConnectWithoutAddressInput } from "../inputs/StoreCreateOrConnectWithoutAddressInput";
import { StoreCreateWithoutAddressInput } from "../inputs/StoreCreateWithoutAddressInput";
import { StoreScalarWhereInput } from "../inputs/StoreScalarWhereInput";
import { StoreUpdateManyWithWhereWithoutAddressInput } from "../inputs/StoreUpdateManyWithWhereWithoutAddressInput";
import { StoreUpdateWithWhereUniqueWithoutAddressInput } from "../inputs/StoreUpdateWithWhereUniqueWithoutAddressInput";
import { StoreUpsertWithWhereUniqueWithoutAddressInput } from "../inputs/StoreUpsertWithWhereUniqueWithoutAddressInput";
import { StoreWhereUniqueInput } from "../inputs/StoreWhereUniqueInput";

@TypeGraphQL.InputType("StoreUpdateManyWithoutAddressNestedInput", {})
export class StoreUpdateManyWithoutAddressNestedInput {
  @TypeGraphQL.Field(_type => [StoreCreateWithoutAddressInput], {
    nullable: true
  })
  create?: StoreCreateWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoreCreateOrConnectWithoutAddressInput], {
    nullable: true
  })
  connectOrCreate?: StoreCreateOrConnectWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoreUpsertWithWhereUniqueWithoutAddressInput], {
    nullable: true
  })
  upsert?: StoreUpsertWithWhereUniqueWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => StoreCreateManyAddressInputEnvelope, {
    nullable: true
  })
  createMany?: StoreCreateManyAddressInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StoreWhereUniqueInput], {
    nullable: true
  })
  set?: StoreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoreWhereUniqueInput], {
    nullable: true
  })
  disconnect?: StoreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoreWhereUniqueInput], {
    nullable: true
  })
  delete?: StoreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoreWhereUniqueInput], {
    nullable: true
  })
  connect?: StoreWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoreUpdateWithWhereUniqueWithoutAddressInput], {
    nullable: true
  })
  update?: StoreUpdateWithWhereUniqueWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoreUpdateManyWithWhereWithoutAddressInput], {
    nullable: true
  })
  updateMany?: StoreUpdateManyWithWhereWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoreScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StoreScalarWhereInput[] | undefined;
}
