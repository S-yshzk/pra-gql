import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateWithoutStaff_staff_store_idTostoreInput } from "../inputs/StoreCreateWithoutStaff_staff_store_idTostoreInput";
import { StoreUpdateWithoutStaff_staff_store_idTostoreInput } from "../inputs/StoreUpdateWithoutStaff_staff_store_idTostoreInput";
import { StoreWhereInput } from "../inputs/StoreWhereInput";

@TypeGraphQL.InputType("StoreUpsertWithoutStaff_staff_store_idTostoreInput", {})
export class StoreUpsertWithoutStaff_staff_store_idTostoreInput {
  @TypeGraphQL.Field(_type => StoreUpdateWithoutStaff_staff_store_idTostoreInput, {
    nullable: false
  })
  update!: StoreUpdateWithoutStaff_staff_store_idTostoreInput;

  @TypeGraphQL.Field(_type => StoreCreateWithoutStaff_staff_store_idTostoreInput, {
    nullable: false
  })
  create!: StoreCreateWithoutStaff_staff_store_idTostoreInput;

  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  where?: StoreWhereInput | undefined;
}
