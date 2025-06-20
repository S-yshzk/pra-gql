import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateOrConnectWithoutStaff_staff_store_idTostoreInput } from "../inputs/StoreCreateOrConnectWithoutStaff_staff_store_idTostoreInput";
import { StoreCreateWithoutStaff_staff_store_idTostoreInput } from "../inputs/StoreCreateWithoutStaff_staff_store_idTostoreInput";
import { StoreUpdateToOneWithWhereWithoutStaff_staff_store_idTostoreInput } from "../inputs/StoreUpdateToOneWithWhereWithoutStaff_staff_store_idTostoreInput";
import { StoreUpsertWithoutStaff_staff_store_idTostoreInput } from "../inputs/StoreUpsertWithoutStaff_staff_store_idTostoreInput";
import { StoreWhereUniqueInput } from "../inputs/StoreWhereUniqueInput";

@TypeGraphQL.InputType("StoreUpdateOneRequiredWithoutStaff_staff_store_idTostoreNestedInput", {})
export class StoreUpdateOneRequiredWithoutStaff_staff_store_idTostoreNestedInput {
  @TypeGraphQL.Field(_type => StoreCreateWithoutStaff_staff_store_idTostoreInput, {
    nullable: true
  })
  create?: StoreCreateWithoutStaff_staff_store_idTostoreInput | undefined;

  @TypeGraphQL.Field(_type => StoreCreateOrConnectWithoutStaff_staff_store_idTostoreInput, {
    nullable: true
  })
  connectOrCreate?: StoreCreateOrConnectWithoutStaff_staff_store_idTostoreInput | undefined;

  @TypeGraphQL.Field(_type => StoreUpsertWithoutStaff_staff_store_idTostoreInput, {
    nullable: true
  })
  upsert?: StoreUpsertWithoutStaff_staff_store_idTostoreInput | undefined;

  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: true
  })
  connect?: StoreWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StoreUpdateToOneWithWhereWithoutStaff_staff_store_idTostoreInput, {
    nullable: true
  })
  update?: StoreUpdateToOneWithWhereWithoutStaff_staff_store_idTostoreInput | undefined;
}
