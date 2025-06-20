import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutStoreInput } from "../inputs/CustomerCreateWithoutStoreInput";
import { CustomerUpdateWithoutStoreInput } from "../inputs/CustomerUpdateWithoutStoreInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpsertWithWhereUniqueWithoutStoreInput", {})
export class CustomerUpsertWithWhereUniqueWithoutStoreInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutStoreInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutStoreInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutStoreInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutStoreInput;
}
