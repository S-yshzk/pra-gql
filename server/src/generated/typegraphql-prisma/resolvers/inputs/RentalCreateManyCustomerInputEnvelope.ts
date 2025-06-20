import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateManyCustomerInput } from "../inputs/RentalCreateManyCustomerInput";

@TypeGraphQL.InputType("RentalCreateManyCustomerInputEnvelope", {})
export class RentalCreateManyCustomerInputEnvelope {
  @TypeGraphQL.Field(_type => [RentalCreateManyCustomerInput], {
    nullable: false
  })
  data!: RentalCreateManyCustomerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
