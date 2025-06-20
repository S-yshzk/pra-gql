import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateManyStore_staff_store_idTostoreInput } from "../inputs/StaffCreateManyStore_staff_store_idTostoreInput";

@TypeGraphQL.InputType("StaffCreateManyStore_staff_store_idTostoreInputEnvelope", {})
export class StaffCreateManyStore_staff_store_idTostoreInputEnvelope {
  @TypeGraphQL.Field(_type => [StaffCreateManyStore_staff_store_idTostoreInput], {
    nullable: false
  })
  data!: StaffCreateManyStore_staff_store_idTostoreInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
