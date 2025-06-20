import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateManyStore_staff_store_idTostoreInputEnvelope } from "../inputs/StaffCreateManyStore_staff_store_idTostoreInputEnvelope";
import { StaffCreateOrConnectWithoutStore_staff_store_idTostoreInput } from "../inputs/StaffCreateOrConnectWithoutStore_staff_store_idTostoreInput";
import { StaffCreateWithoutStore_staff_store_idTostoreInput } from "../inputs/StaffCreateWithoutStore_staff_store_idTostoreInput";
import { StaffScalarWhereInput } from "../inputs/StaffScalarWhereInput";
import { StaffUpdateManyWithWhereWithoutStore_staff_store_idTostoreInput } from "../inputs/StaffUpdateManyWithWhereWithoutStore_staff_store_idTostoreInput";
import { StaffUpdateWithWhereUniqueWithoutStore_staff_store_idTostoreInput } from "../inputs/StaffUpdateWithWhereUniqueWithoutStore_staff_store_idTostoreInput";
import { StaffUpsertWithWhereUniqueWithoutStore_staff_store_idTostoreInput } from "../inputs/StaffUpsertWithWhereUniqueWithoutStore_staff_store_idTostoreInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffUpdateManyWithoutStore_staff_store_idTostoreNestedInput", {})
export class StaffUpdateManyWithoutStore_staff_store_idTostoreNestedInput {
  @TypeGraphQL.Field(_type => [StaffCreateWithoutStore_staff_store_idTostoreInput], {
    nullable: true
  })
  create?: StaffCreateWithoutStore_staff_store_idTostoreInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffCreateOrConnectWithoutStore_staff_store_idTostoreInput], {
    nullable: true
  })
  connectOrCreate?: StaffCreateOrConnectWithoutStore_staff_store_idTostoreInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffUpsertWithWhereUniqueWithoutStore_staff_store_idTostoreInput], {
    nullable: true
  })
  upsert?: StaffUpsertWithWhereUniqueWithoutStore_staff_store_idTostoreInput[] | undefined;

  @TypeGraphQL.Field(_type => StaffCreateManyStore_staff_store_idTostoreInputEnvelope, {
    nullable: true
  })
  createMany?: StaffCreateManyStore_staff_store_idTostoreInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [StaffUpdateWithWhereUniqueWithoutStore_staff_store_idTostoreInput], {
    nullable: true
  })
  update?: StaffUpdateWithWhereUniqueWithoutStore_staff_store_idTostoreInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffUpdateManyWithWhereWithoutStore_staff_store_idTostoreInput], {
    nullable: true
  })
  updateMany?: StaffUpdateManyWithWhereWithoutStore_staff_store_idTostoreInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffScalarWhereInput], {
    nullable: true
  })
  deleteMany?: StaffScalarWhereInput[] | undefined;
}
