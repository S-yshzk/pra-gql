import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AddressMinAggregate", {})
export class AddressMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  address_id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address2!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  district!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  city_id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  postal_code!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_update!: Date | null;
}
