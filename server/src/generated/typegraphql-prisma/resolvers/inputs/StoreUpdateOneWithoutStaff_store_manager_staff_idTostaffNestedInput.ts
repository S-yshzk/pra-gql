import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateOrConnectWithoutStaff_store_manager_staff_idTostaffInput } from "../inputs/StoreCreateOrConnectWithoutStaff_store_manager_staff_idTostaffInput";
import { StoreCreateWithoutStaff_store_manager_staff_idTostaffInput } from "../inputs/StoreCreateWithoutStaff_store_manager_staff_idTostaffInput";
import { StoreUpdateToOneWithWhereWithoutStaff_store_manager_staff_idTostaffInput } from "../inputs/StoreUpdateToOneWithWhereWithoutStaff_store_manager_staff_idTostaffInput";
import { StoreUpsertWithoutStaff_store_manager_staff_idTostaffInput } from "../inputs/StoreUpsertWithoutStaff_store_manager_staff_idTostaffInput";
import { StoreWhereInput } from "../inputs/StoreWhereInput";
import { StoreWhereUniqueInput } from "../inputs/StoreWhereUniqueInput";

@TypeGraphQL.InputType("StoreUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput", {})
export class StoreUpdateOneWithoutStaff_store_manager_staff_idTostaffNestedInput {
  @TypeGraphQL.Field(_type => StoreCreateWithoutStaff_store_manager_staff_idTostaffInput, {
    nullable: true
  })
  create?: StoreCreateWithoutStaff_store_manager_staff_idTostaffInput | undefined;

  @TypeGraphQL.Field(_type => StoreCreateOrConnectWithoutStaff_store_manager_staff_idTostaffInput, {
    nullable: true
  })
  connectOrCreate?: StoreCreateOrConnectWithoutStaff_store_manager_staff_idTostaffInput | undefined;

  @TypeGraphQL.Field(_type => StoreUpsertWithoutStaff_store_manager_staff_idTostaffInput, {
    nullable: true
  })
  upsert?: StoreUpsertWithoutStaff_store_manager_staff_idTostaffInput | undefined;

  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  disconnect?: StoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  delete?: StoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: true
  })
  connect?: StoreWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StoreUpdateToOneWithWhereWithoutStaff_store_manager_staff_idTostaffInput, {
    nullable: true
  })
  update?: StoreUpdateToOneWithWhereWithoutStaff_store_manager_staff_idTostaffInput | undefined;
}
