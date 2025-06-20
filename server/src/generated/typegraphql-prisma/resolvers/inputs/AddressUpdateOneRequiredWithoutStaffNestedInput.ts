import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressUpdateToOneWithWhereWithoutStaffInput } from "../inputs/AddressUpdateToOneWithWhereWithoutStaffInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressUpdateOneRequiredWithoutStaffNestedInput", {})
export class AddressUpdateOneRequiredWithoutStaffNestedInput {
  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: true
  })
  connect?: AddressWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AddressUpdateToOneWithWhereWithoutStaffInput, {
    nullable: true
  })
  update?: AddressUpdateToOneWithWhereWithoutStaffInput | undefined;
}
