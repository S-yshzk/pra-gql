import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalAvgAggregate } from "../outputs/RentalAvgAggregate";
import { RentalCountAggregate } from "../outputs/RentalCountAggregate";
import { RentalMaxAggregate } from "../outputs/RentalMaxAggregate";
import { RentalMinAggregate } from "../outputs/RentalMinAggregate";
import { RentalSumAggregate } from "../outputs/RentalSumAggregate";

@TypeGraphQL.ObjectType("AggregateRental", {})
export class AggregateRental {
  @TypeGraphQL.Field(_type => RentalCountAggregate, {
    nullable: true
  })
  _count!: RentalCountAggregate | null;

  @TypeGraphQL.Field(_type => RentalAvgAggregate, {
    nullable: true
  })
  _avg!: RentalAvgAggregate | null;

  @TypeGraphQL.Field(_type => RentalSumAggregate, {
    nullable: true
  })
  _sum!: RentalSumAggregate | null;

  @TypeGraphQL.Field(_type => RentalMinAggregate, {
    nullable: true
  })
  _min!: RentalMinAggregate | null;

  @TypeGraphQL.Field(_type => RentalMaxAggregate, {
    nullable: true
  })
  _max!: RentalMaxAggregate | null;
}
