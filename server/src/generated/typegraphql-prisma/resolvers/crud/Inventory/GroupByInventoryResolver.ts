import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByInventoryArgs } from "./args/GroupByInventoryArgs";
import { Inventory } from "../../../models/Inventory";
import { InventoryGroupBy } from "../../outputs/InventoryGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Inventory)
export class GroupByInventoryResolver {
  @TypeGraphQL.Query(_returns => [InventoryGroupBy], {
    nullable: false
  })
  async groupByInventory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByInventoryArgs): Promise<InventoryGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).inventory.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
