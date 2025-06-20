import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateWithoutPaymentInput } from "../inputs/RentalCreateWithoutPaymentInput";
import { RentalWhereUniqueInput } from "../inputs/RentalWhereUniqueInput";

@TypeGraphQL.InputType("RentalCreateOrConnectWithoutPaymentInput", {})
export class RentalCreateOrConnectWithoutPaymentInput {
  @TypeGraphQL.Field(_type => RentalWhereUniqueInput, {
    nullable: false
  })
  where!: RentalWhereUniqueInput;

  @TypeGraphQL.Field(_type => RentalCreateWithoutPaymentInput, {
    nullable: false
  })
  create!: RentalCreateWithoutPaymentInput;
}
