import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateWithoutPaymentInput } from "../inputs/RentalCreateWithoutPaymentInput";
import { RentalUpdateWithoutPaymentInput } from "../inputs/RentalUpdateWithoutPaymentInput";
import { RentalWhereInput } from "../inputs/RentalWhereInput";

@TypeGraphQL.InputType("RentalUpsertWithoutPaymentInput", {})
export class RentalUpsertWithoutPaymentInput {
  @TypeGraphQL.Field(_type => RentalUpdateWithoutPaymentInput, {
    nullable: false
  })
  update!: RentalUpdateWithoutPaymentInput;

  @TypeGraphQL.Field(_type => RentalCreateWithoutPaymentInput, {
    nullable: false
  })
  create!: RentalCreateWithoutPaymentInput;

  @TypeGraphQL.Field(_type => RentalWhereInput, {
    nullable: true
  })
  where?: RentalWhereInput | undefined;
}
