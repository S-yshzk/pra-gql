import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressUpdateWithoutStaffInput } from "../inputs/AddressUpdateWithoutStaffInput";
import { AddressWhereInput } from "../inputs/AddressWhereInput";

@TypeGraphQL.InputType("AddressUpdateToOneWithWhereWithoutStaffInput", {})
export class AddressUpdateToOneWithWhereWithoutStaffInput {
  @TypeGraphQL.Field(_type => AddressWhereInput, {
    nullable: true
  })
  where?: AddressWhereInput | undefined;

  @TypeGraphQL.Field(_type => AddressUpdateWithoutStaffInput, {
    nullable: false
  })
  data!: AddressUpdateWithoutStaffInput;
}
