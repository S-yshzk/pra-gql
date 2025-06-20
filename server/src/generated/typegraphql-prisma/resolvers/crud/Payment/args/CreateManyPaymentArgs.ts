import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PaymentCreateManyInput } from "../../../inputs/PaymentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPaymentArgs {
  @TypeGraphQL.Field(_type => [PaymentCreateManyInput], {
    nullable: false
  })
  data!: PaymentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
