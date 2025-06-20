import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutStoreInput } from "../inputs/CustomerUpdateWithoutStoreInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateWithWhereUniqueWithoutStoreInput", {})
export class CustomerUpdateWithWhereUniqueWithoutStoreInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutStoreInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutStoreInput;
}
