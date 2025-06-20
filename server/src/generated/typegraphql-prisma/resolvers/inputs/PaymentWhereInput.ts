import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerRelationFilter } from "../inputs/CustomerRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DecimalFilter } from "../inputs/DecimalFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { RentalNullableRelationFilter } from "../inputs/RentalNullableRelationFilter";
import { StaffRelationFilter } from "../inputs/StaffRelationFilter";

@TypeGraphQL.InputType("PaymentWhereInput", {})
export class PaymentWhereInput {
  @TypeGraphQL.Field(_type => [PaymentWhereInput], {
    nullable: true
  })
  AND?: PaymentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentWhereInput], {
    nullable: true
  })
  OR?: PaymentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PaymentWhereInput], {
    nullable: true
  })
  NOT?: PaymentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  payment_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  customer_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  staff_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  rental_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalFilter, {
    nullable: true
  })
  amount?: DecimalFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  payment_date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  last_update?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerRelationFilter, {
    nullable: true
  })
  customer?: CustomerRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RentalNullableRelationFilter, {
    nullable: true
  })
  rental?: RentalNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StaffRelationFilter, {
    nullable: true
  })
  staff?: StaffRelationFilter | undefined;
}
