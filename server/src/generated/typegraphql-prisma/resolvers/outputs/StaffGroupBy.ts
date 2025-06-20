import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StaffAvgAggregate } from "../outputs/StaffAvgAggregate";
import { StaffCountAggregate } from "../outputs/StaffCountAggregate";
import { StaffMaxAggregate } from "../outputs/StaffMaxAggregate";
import { StaffMinAggregate } from "../outputs/StaffMinAggregate";
import { StaffSumAggregate } from "../outputs/StaffSumAggregate";

@TypeGraphQL.ObjectType("StaffGroupBy", {})
export class StaffGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  staff_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  address_id!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  picture!: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  store_id!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_update!: Date;

  @TypeGraphQL.Field(_type => StaffCountAggregate, {
    nullable: true
  })
  _count!: StaffCountAggregate | null;

  @TypeGraphQL.Field(_type => StaffAvgAggregate, {
    nullable: true
  })
  _avg!: StaffAvgAggregate | null;

  @TypeGraphQL.Field(_type => StaffSumAggregate, {
    nullable: true
  })
  _sum!: StaffSumAggregate | null;

  @TypeGraphQL.Field(_type => StaffMinAggregate, {
    nullable: true
  })
  _min!: StaffMinAggregate | null;

  @TypeGraphQL.Field(_type => StaffMaxAggregate, {
    nullable: true
  })
  _max!: StaffMaxAggregate | null;
}
