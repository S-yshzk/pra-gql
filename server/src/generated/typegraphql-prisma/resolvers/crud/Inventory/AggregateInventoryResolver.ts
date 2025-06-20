import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateInventoryArgs } from "./args/AggregateInventoryArgs";
import { Inventory } from "../../../models/Inventory";
import { AggregateInventory } from "../../outputs/AggregateInventory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Inventory)
export class AggregateInventoryResolver {
  @TypeGraphQL.Query(_returns => AggregateInventory, {
    nullable: false
  })
  async aggregateInventory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateInventoryArgs): Promise<AggregateInventory> {
    return getPrismaFromContext(ctx).inventory.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
