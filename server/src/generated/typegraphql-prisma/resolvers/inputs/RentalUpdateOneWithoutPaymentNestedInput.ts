import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateOrConnectWithoutPaymentInput } from "../inputs/RentalCreateOrConnectWithoutPaymentInput";
import { RentalCreateWithoutPaymentInput } from "../inputs/RentalCreateWithoutPaymentInput";
import { RentalUpdateToOneWithWhereWithoutPaymentInput } from "../inputs/RentalUpdateToOneWithWhereWithoutPaymentInput";
import { RentalUpsertWithoutPaymentInput } from "../inputs/RentalUpsertWithoutPaymentInput";
import { RentalWhereInput } from "../inputs/RentalWhereInput";
import { RentalWhereUniqueInput } from "../inputs/RentalWhereUniqueInput";

@TypeGraphQL.InputType("RentalUpdateOneWithoutPaymentNestedInput", {})
export class RentalUpdateOneWithoutPaymentNestedInput {
  @TypeGraphQL.Field(_type => RentalCreateWithoutPaymentInput, {
    nullable: true
  })
  create?: RentalCreateWithoutPaymentInput | undefined;

  @TypeGraphQL.Field(_type => RentalCreateOrConnectWithoutPaymentInput, {
    nullable: true
  })
  connectOrCreate?: RentalCreateOrConnectWithoutPaymentInput | undefined;

  @TypeGraphQL.Field(_type => RentalUpsertWithoutPaymentInput, {
    nullable: true
  })
  upsert?: RentalUpsertWithoutPaymentInput | undefined;

  @TypeGraphQL.Field(_type => RentalWhereInput, {
    nullable: true
  })
  disconnect?: RentalWhereInput | undefined;

  @TypeGraphQL.Field(_type => RentalWhereInput, {
    nullable: true
  })
  delete?: RentalWhereInput | undefined;

  @TypeGraphQL.Field(_type => RentalWhereUniqueInput, {
    nullable: true
  })
  connect?: RentalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RentalUpdateToOneWithWhereWithoutPaymentInput, {
    nullable: true
  })
  update?: RentalUpdateToOneWithWhereWithoutPaymentInput | undefined;
}
