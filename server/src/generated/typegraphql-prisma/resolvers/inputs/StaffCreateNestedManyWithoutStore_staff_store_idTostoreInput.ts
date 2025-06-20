import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateManyStore_staff_store_idTostoreInputEnvelope } from "../inputs/StaffCreateManyStore_staff_store_idTostoreInputEnvelope";
import { StaffCreateOrConnectWithoutStore_staff_store_idTostoreInput } from "../inputs/StaffCreateOrConnectWithoutStore_staff_store_idTostoreInput";
import { StaffCreateWithoutStore_staff_store_idTostoreInput } from "../inputs/StaffCreateWithoutStore_staff_store_idTostoreInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffCreateNestedManyWithoutStore_staff_store_idTostoreInput", {})
export class StaffCreateNestedManyWithoutStore_staff_store_idTostoreInput {
  @TypeGraphQL.Field(_type => [StaffCreateWithoutStore_staff_store_idTostoreInput], {
    nullable: true
  })
  create?: StaffCreateWithoutStore_staff_store_idTostoreInput[] | undefined;

  @TypeGraphQL.Field(_type => [StaffCreateOrConnectWithoutStore_staff_store_idTostoreInput], {
    nullable: true
  })
  connectOrCreate?: StaffCreateOrConnectWithoutStore_staff_store_idTostoreInput[] | undefined;

  @TypeGraphQL.Field(_type => StaffCreateManyStore_staff_store_idTostoreInputEnvelope, {
    nullable: true
  })
  createMany?: StaffCreateManyStore_staff_store_idTostoreInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StaffWhereUniqueInput], {
    nullable: true
  })
  connect?: StaffWhereUniqueInput[] | undefined;
}
