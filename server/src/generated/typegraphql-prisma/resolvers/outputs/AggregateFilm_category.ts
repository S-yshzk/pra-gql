import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_categoryAvgAggregate } from "../outputs/Film_categoryAvgAggregate";
import { Film_categoryCountAggregate } from "../outputs/Film_categoryCountAggregate";
import { Film_categoryMaxAggregate } from "../outputs/Film_categoryMaxAggregate";
import { Film_categoryMinAggregate } from "../outputs/Film_categoryMinAggregate";
import { Film_categorySumAggregate } from "../outputs/Film_categorySumAggregate";

@TypeGraphQL.ObjectType("AggregateFilm_category", {})
export class AggregateFilm_category {
  @TypeGraphQL.Field(_type => Film_categoryCountAggregate, {
    nullable: true
  })
  _count!: Film_categoryCountAggregate | null;

  @TypeGraphQL.Field(_type => Film_categoryAvgAggregate, {
    nullable: true
  })
  _avg!: Film_categoryAvgAggregate | null;

  @TypeGraphQL.Field(_type => Film_categorySumAggregate, {
    nullable: true
  })
  _sum!: Film_categorySumAggregate | null;

  @TypeGraphQL.Field(_type => Film_categoryMinAggregate, {
    nullable: true
  })
  _min!: Film_categoryMinAggregate | null;

  @TypeGraphQL.Field(_type => Film_categoryMaxAggregate, {
    nullable: true
  })
  _max!: Film_categoryMaxAggregate | null;
}
