import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_textAvgAggregate } from "../outputs/Film_textAvgAggregate";
import { Film_textCountAggregate } from "../outputs/Film_textCountAggregate";
import { Film_textMaxAggregate } from "../outputs/Film_textMaxAggregate";
import { Film_textMinAggregate } from "../outputs/Film_textMinAggregate";
import { Film_textSumAggregate } from "../outputs/Film_textSumAggregate";

@TypeGraphQL.ObjectType("Film_textGroupBy", {})
export class Film_textGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  film_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Film_textCountAggregate, {
    nullable: true
  })
  _count!: Film_textCountAggregate | null;

  @TypeGraphQL.Field(_type => Film_textAvgAggregate, {
    nullable: true
  })
  _avg!: Film_textAvgAggregate | null;

  @TypeGraphQL.Field(_type => Film_textSumAggregate, {
    nullable: true
  })
  _sum!: Film_textSumAggregate | null;

  @TypeGraphQL.Field(_type => Film_textMinAggregate, {
    nullable: true
  })
  _min!: Film_textMinAggregate | null;

  @TypeGraphQL.Field(_type => Film_textMaxAggregate, {
    nullable: true
  })
  _max!: Film_textMaxAggregate | null;
}
