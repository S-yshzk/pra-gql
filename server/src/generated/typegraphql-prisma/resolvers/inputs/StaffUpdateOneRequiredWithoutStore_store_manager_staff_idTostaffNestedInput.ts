import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateOrConnectWithoutStore_store_manager_staff_idTostaffInput } from "../inputs/StaffCreateOrConnectWithoutStore_store_manager_staff_idTostaffInput";
import { StaffCreateWithoutStore_store_manager_staff_idTostaffInput } from "../inputs/StaffCreateWithoutStore_store_manager_staff_idTostaffInput";
import { StaffUpdateToOneWithWhereWithoutStore_store_manager_staff_idTostaffInput } from "../inputs/StaffUpdateToOneWithWhereWithoutStore_store_manager_staff_idTostaffInput";
import { StaffUpsertWithoutStore_store_manager_staff_idTostaffInput } from "../inputs/StaffUpsertWithoutStore_store_manager_staff_idTostaffInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffUpdateOneRequiredWithoutStore_store_manager_staff_idTostaffNestedInput", {})
export class StaffUpdateOneRequiredWithoutStore_store_manager_staff_idTostaffNestedInput {
  @TypeGraphQL.Field(_type => StaffCreateWithoutStore_store_manager_staff_idTostaffInput, {
    nullable: true
  })
  create?: StaffCreateWithoutStore_store_manager_staff_idTostaffInput | undefined;

  @TypeGraphQL.Field(_type => StaffCreateOrConnectWithoutStore_store_manager_staff_idTostaffInput, {
    nullable: true
  })
  connectOrCreate?: StaffCreateOrConnectWithoutStore_store_manager_staff_idTostaffInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpsertWithoutStore_store_manager_staff_idTostaffInput, {
    nullable: true
  })
  upsert?: StaffUpsertWithoutStore_store_manager_staff_idTostaffInput | undefined;

  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: true
  })
  connect?: StaffWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpdateToOneWithWhereWithoutStore_store_manager_staff_idTostaffInput, {
    nullable: true
  })
  update?: StaffUpdateToOneWithWhereWithoutStore_store_manager_staff_idTostaffInput | undefined;
}
