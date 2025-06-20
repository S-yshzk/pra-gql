import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutRentalInput } from "../inputs/CustomerUpdateWithoutRentalInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpdateToOneWithWhereWithoutRentalInput", {})
export class CustomerUpdateToOneWithWhereWithoutRentalInput {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutRentalInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutRentalInput;
}
