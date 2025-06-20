import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCountryArgs } from "./args/AggregateCountryArgs";
import { Country } from "../../../models/Country";
import { AggregateCountry } from "../../outputs/AggregateCountry";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Country)
export class AggregateCountryResolver {
  @TypeGraphQL.Query(_returns => AggregateCountry, {
    nullable: false
  })
  async aggregateCountry(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCountryArgs): Promise<AggregateCountry> {
    return getPrismaFromContext(ctx).country.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
