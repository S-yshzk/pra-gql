import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueInventoryOrThrowArgs } from "./args/FindUniqueInventoryOrThrowArgs";
import { Inventory } from "../../../models/Inventory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Inventory)
export class FindUniqueInventoryOrThrowResolver {
  @TypeGraphQL.Query(_returns => Inventory, {
    nullable: true
  })
  async getInventory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueInventoryOrThrowArgs): Promise<Inventory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).inventory.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
