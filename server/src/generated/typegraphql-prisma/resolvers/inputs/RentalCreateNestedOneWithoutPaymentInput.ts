import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateOrConnectWithoutPaymentInput } from "../inputs/RentalCreateOrConnectWithoutPaymentInput";
import { RentalCreateWithoutPaymentInput } from "../inputs/RentalCreateWithoutPaymentInput";
import { RentalWhereUniqueInput } from "../inputs/RentalWhereUniqueInput";

@TypeGraphQL.InputType("RentalCreateNestedOneWithoutPaymentInput", {})
export class RentalCreateNestedOneWithoutPaymentInput {
  @TypeGraphQL.Field(_type => RentalCreateWithoutPaymentInput, {
    nullable: true
  })
  create?: RentalCreateWithoutPaymentInput | undefined;

  @TypeGraphQL.Field(_type => RentalCreateOrConnectWithoutPaymentInput, {
    nullable: true
  })
  connectOrCreate?: RentalCreateOrConnectWithoutPaymentInput | undefined;

  @TypeGraphQL.Field(_type => RentalWhereUniqueInput, {
    nullable: true
  })
  connect?: RentalWhereUniqueInput | undefined;
}
