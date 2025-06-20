import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("RentalMinAggregate", {})
export class RentalMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rental_id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  rental_date!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  inventory_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customer_id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  return_date!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  staff_id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update!: Date | null;
}
