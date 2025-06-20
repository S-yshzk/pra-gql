import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneInventoryArgs } from "./args/UpsertOneInventoryArgs";
import { Inventory } from "../../../models/Inventory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Inventory)
export class UpsertOneInventoryResolver {
  @TypeGraphQL.Mutation(_returns => Inventory, {
    nullable: false
  })
  async upsertOneInventory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneInventoryArgs): Promise<Inventory> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).inventory.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
