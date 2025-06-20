import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateActorArgs } from "./args/AggregateActorArgs";
import { Actor } from "../../../models/Actor";
import { AggregateActor } from "../../outputs/AggregateActor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Actor)
export class AggregateActorResolver {
  @TypeGraphQL.Query(_returns => AggregateActor, {
    nullable: false
  })
  async aggregateActor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateActorArgs): Promise<AggregateActor> {
    return getPrismaFromContext(ctx).actor.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
