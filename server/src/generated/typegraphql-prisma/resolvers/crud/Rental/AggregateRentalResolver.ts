import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateRentalArgs } from "./args/AggregateRentalArgs";
import { Rental } from "../../../models/Rental";
import { AggregateRental } from "../../outputs/AggregateRental";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rental)
export class AggregateRentalResolver {
  @TypeGraphQL.Query(_returns => AggregateRental, {
    nullable: false
  })
  async aggregateRental(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRentalArgs): Promise<AggregateRental> {
    return getPrismaFromContext(ctx).rental.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
