import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressUpdateToOneWithWhereWithoutStoreInput } from "../inputs/AddressUpdateToOneWithWhereWithoutStoreInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";

@TypeGraphQL.InputType("AddressUpdateOneRequiredWithoutStoreNestedInput", {})
export class AddressUpdateOneRequiredWithoutStoreNestedInput {
  @TypeGraphQL.Field(_type => AddressWhereUniqueInput, {
    nullable: true
  })
  connect?: AddressWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AddressUpdateToOneWithWhereWithoutStoreInput, {
    nullable: true
  })
  update?: AddressUpdateToOneWithWhereWithoutStoreInput | undefined;
}
