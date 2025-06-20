import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateManyAddressInputEnvelope } from "../inputs/StaffCreateManyAddressInputEnvelope";
import { StaffCreateOrConnectWithoutAddressInput } from "../inputs/StaffCreateOrConnectWithoutAddressInput";
import { StaffCreateWithoutAddressInput } from "../inputs/StaffCreateWithoutAddressInput";
import { StaffScalarWhereInput } from "../inputs/StaffScalarWhereInput";
import { StaffUpdateManyWithWhereWithoutAddressInput } from "../inputs/StaffUpdateManyWithWhereWithoutAddressInput";
import { StaffUpdateWithWhereUniqueWithoutAddressInput } from "../inputs/StaffUpdateWithWhereUniqueWithoutAddressInput";
import { StaffUpsertWithWhereUniqueWithoutAddressInput } from "../inputs/StaffUpsertWithWhereUniqueWithoutAddressInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffUpdateManyWithoutAddressNestedInput", {})
export class StaffUpdateManyWithoutAddressNestedInput {
  @TypeGraphQL.Field(_type => [StaffCreateWithoutAddressInput], {
    nullable: true
  })
  create?: StaffCreateWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffCreateOrConnectWithoutAddressInput], {
    nullable: true
  })
  connectOrCreate?: StaffCreateOrConnectWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffUpsertWithWhereUniqueWithoutAddressInput], {
    nullable: true
  })
  upsert?: StaffUpsertWithWhereUniqueWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => StaffCreateManyAddressInputEnvelope, {
    nullable: true
  })
  createMany?: StaffCreateManyAddressInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StaffWhereUniqueInput], {
    nullable: true
  })
  set?: StaffWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffWhereUniqueInput], {
    nullable: true
  })
  disconnect?: StaffWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffWhereUniqueInput], {
    nullable: true
  })
  delete?: StaffWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffWhereUniqueInput], {
    nullable: true
  })
  connect?: StaffWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffUpdateWithWhereUniqueWithoutAddressInput], {
    nullable: true
  })
  update?: StaffUpdateWithWhereUniqueWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffUpdateManyWithWhereWithoutAddressInput], {
    nullable: true
  })
  updateMany?: StaffUpdateManyWithWhereWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StaffScalarWhereInput[] | undefined;
}
