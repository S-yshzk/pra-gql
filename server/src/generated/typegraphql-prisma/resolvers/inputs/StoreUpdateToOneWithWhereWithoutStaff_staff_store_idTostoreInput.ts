import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreUpdateWithoutStaff_staff_store_idTostoreInput } from "../inputs/StoreUpdateWithoutStaff_staff_store_idTostoreInput";
import { StoreWhereInput } from "../inputs/StoreWhereInput";

@TypeGraphQL.InputType("StoreUpdateToOneWithWhereWithoutStaff_staff_store_idTostoreInput", {})
export class StoreUpdateToOneWithWhereWithoutStaff_staff_store_idTostoreInput {
  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  where?: StoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => StoreUpdateWithoutStaff_staff_store_idTostoreInput, {
    nullable: false
  })
  data!: StoreUpdateWithoutStaff_staff_store_idTostoreInput;
}
