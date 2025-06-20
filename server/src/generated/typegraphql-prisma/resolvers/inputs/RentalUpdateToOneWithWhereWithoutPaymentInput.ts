import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalUpdateWithoutPaymentInput } from "../inputs/RentalUpdateWithoutPaymentInput";
import { RentalWhereInput } from "../inputs/RentalWhereInput";

@TypeGraphQL.InputType("RentalUpdateToOneWithWhereWithoutPaymentInput", {})
export class RentalUpdateToOneWithWhereWithoutPaymentInput {
  @TypeGraphQL.Field(_type => RentalWhereInput, {
    nullable: true
  })
  where?: RentalWhereInput | undefined;

  @TypeGraphQL.Field(_type => RentalUpdateWithoutPaymentInput, {
    nullable: false
  })
  data!: RentalUpdateWithoutPaymentInput;
}
