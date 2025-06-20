import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateStoreArgs } from "./args/AggregateStoreArgs";
import { Store } from "../../../models/Store";
import { AggregateStore } from "../../outputs/AggregateStore";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Store)
export class AggregateStoreResolver {
  @TypeGraphQL.Query(_returns => AggregateStore, {
    nullable: false
  })
  async aggregateStore(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStoreArgs): Promise<AggregateStore> {
    return getPrismaFromContext(ctx).store.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
