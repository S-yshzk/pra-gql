import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreUpdateWithoutCustomerInput } from "../inputs/StoreUpdateWithoutCustomerInput";
import { StoreWhereInput } from "../inputs/StoreWhereInput";

@TypeGraphQL.InputType("StoreUpdateToOneWithWhereWithoutCustomerInput", {})
export class StoreUpdateToOneWithWhereWithoutCustomerInput {
  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  where?: StoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => StoreUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: StoreUpdateWithoutCustomerInput;
}
