import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutPaymentInput } from "../inputs/CustomerCreateOrConnectWithoutPaymentInput";
import { CustomerCreateWithoutPaymentInput } from "../inputs/CustomerCreateWithoutPaymentInput";
import { CustomerUpdateToOneWithWhereWithoutPaymentInput } from "../inputs/CustomerUpdateToOneWithWhereWithoutPaymentInput";
import { CustomerUpsertWithoutPaymentInput } from "../inputs/CustomerUpsertWithoutPaymentInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateOneRequiredWithoutPaymentNestedInput", {})
export class CustomerUpdateOneRequiredWithoutPaymentNestedInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutPaymentInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutPaymentInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutPaymentInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutPaymentInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpsertWithoutPaymentInput, {
    nullable: true
  })
  upsert?: CustomerUpsertWithoutPaymentInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateToOneWithWhereWithoutPaymentInput, {
    nullable: true
  })
  update?: CustomerUpdateToOneWithWhereWithoutPaymentInput | undefined;
}
