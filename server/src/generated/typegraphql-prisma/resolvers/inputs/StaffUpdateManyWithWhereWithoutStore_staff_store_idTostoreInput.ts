import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffScalarWhereInput } from "../inputs/StaffScalarWhereInput";
import { StaffUpdateManyMutationInput } from "../inputs/StaffUpdateManyMutationInput";

@TypeGraphQL.InputType("StaffUpdateManyWithWhereWithoutStore_staff_store_idTostoreInput", {})
export class StaffUpdateManyWithWhereWithoutStore_staff_store_idTostoreInput {
  @TypeGraphQL.Field(_type => StaffScalarWhereInput, {
    nullable: false
  })
  where!: StaffScalarWhereInput;

  @TypeGraphQL.Field(_type => StaffUpdateManyMutationInput, {
    nullable: false
  })
  data!: StaffUpdateManyMutationInput;
}
