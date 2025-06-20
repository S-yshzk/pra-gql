import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AddressUpdateWithoutStoreInput } from "../inputs/AddressUpdateWithoutStoreInput";
import { AddressWhereInput } from "../inputs/AddressWhereInput";

@TypeGraphQL.InputType("AddressUpdateToOneWithWhereWithoutStoreInput", {})
export class AddressUpdateToOneWithWhereWithoutStoreInput {
  @TypeGraphQL.Field(_type => AddressWhereInput, {
    nullable: true
  })
  where?: AddressWhereInput | undefined;

  @TypeGraphQL.Field(_type => AddressUpdateWithoutStoreInput, {
    nullable: false
  })
  data!: AddressUpdateWithoutStoreInput;
}
