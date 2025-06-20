import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("RentalScalarWhereInput", {})
export class RentalScalarWhereInput {
  @TypeGraphQL.Field(_type => [RentalScalarWhereInput], {
    nullable: true
  })
  AND?: RentalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalScalarWhereInput], {
    nullable: true
  })
  OR?: RentalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalScalarWhereInput], {
    nullable: true
  })
  NOT?: RentalScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  rental_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  rental_date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  inventory_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  customer_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  return_date?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  staff_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;
}
