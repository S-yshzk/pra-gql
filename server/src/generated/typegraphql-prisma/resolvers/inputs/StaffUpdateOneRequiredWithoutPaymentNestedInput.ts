import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffCreateOrConnectWithoutPaymentInput } from "../inputs/StaffCreateOrConnectWithoutPaymentInput";
import { StaffCreateWithoutPaymentInput } from "../inputs/StaffCreateWithoutPaymentInput";
import { StaffUpdateToOneWithWhereWithoutPaymentInput } from "../inputs/StaffUpdateToOneWithWhereWithoutPaymentInput";
import { StaffUpsertWithoutPaymentInput } from "../inputs/StaffUpsertWithoutPaymentInput";
import { StaffWhereUniqueInput } from "../inputs/StaffWhereUniqueInput";

@TypeGraphQL.InputType("StaffUpdateOneRequiredWithoutPaymentNestedInput", {})
export class StaffUpdateOneRequiredWithoutPaymentNestedInput {
  @TypeGraphQL.Field(_type => StaffCreateWithoutPaymentInput, {
    nullable: true
  })
  create?: StaffCreateWithoutPaymentInput | undefined;

  @TypeGraphQL.Field(_type => StaffCreateOrConnectWithoutPaymentInput, {
    nullable: true
  })
  connectOrCreate?: StaffCreateOrConnectWithoutPaymentInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpsertWithoutPaymentInput, {
    nullable: true
  })
  upsert?: StaffUpsertWithoutPaymentInput | undefined;

  @TypeGraphQL.Field(_type => StaffWhereUniqueInput, {
    nullable: true
  })
  connect?: StaffWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StaffUpdateToOneWithWhereWithoutPaymentInput, {
    nullable: true
  })
  update?: StaffUpdateToOneWithWhereWithoutPaymentInput | undefined;
}
