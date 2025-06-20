import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateWithoutCustomerInput } from "../inputs/StoreCreateWithoutCustomerInput";
import { StoreUpdateWithoutCustomerInput } from "../inputs/StoreUpdateWithoutCustomerInput";
import { StoreWhereInput } from "../inputs/StoreWhereInput";

@TypeGraphQL.InputType("StoreUpsertWithoutCustomerInput", {})
export class StoreUpsertWithoutCustomerInput {
  @TypeGraphQL.Field(_type => StoreUpdateWithoutCustomerInput, {
    nullable: false
  })
  update!: StoreUpdateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => StoreCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: StoreCreateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  where?: StoreWhereInput | undefined;
}
