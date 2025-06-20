import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CustomerMaxAggregate", {})
export class CustomerMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customer_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  store_id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  first_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  address_id!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  create_date!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update!: Date | null;
}
