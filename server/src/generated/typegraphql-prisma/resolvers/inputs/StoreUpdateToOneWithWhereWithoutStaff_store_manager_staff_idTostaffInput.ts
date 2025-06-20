import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreUpdateWithoutStaff_store_manager_staff_idTostaffInput } from "../inputs/StoreUpdateWithoutStaff_store_manager_staff_idTostaffInput";
import { StoreWhereInput } from "../inputs/StoreWhereInput";

@TypeGraphQL.InputType("StoreUpdateToOneWithWhereWithoutStaff_store_manager_staff_idTostaffInput", {})
export class StoreUpdateToOneWithWhereWithoutStaff_store_manager_staff_idTostaffInput {
  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  where?: StoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => StoreUpdateWithoutStaff_store_manager_staff_idTostaffInput, {
    nullable: false
  })
  data!: StoreUpdateWithoutStaff_store_manager_staff_idTostaffInput;
}
